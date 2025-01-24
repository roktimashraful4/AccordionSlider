class AccordionSlider {
    constructor(containerSelector, options = {}) {
      this.container = document.querySelector(containerSelector);
      if (!this.container) throw new Error("Container not found!");
  
      this.panels = this.container.querySelectorAll('.as-panel');
      this.nextButton = this.container.querySelector('button:nth-of-type(2)');
      this.prevButton = this.container.querySelector('button:nth-of-type(1)');
  
      this.activeIndex = 0;
      this.direction = 1; // 1 for forward, -1 for backward
      this.interval = null;
  
      // Default options with user override
      this.settings = Object.assign(
        {
          autoLoop: true, // Enable auto-loop
          loopInterval: 2000, // Time in milliseconds for auto-loop
        },
        options
      );
  
      // Initialize slider
      this.init();
    }
  
    // Initialize all necessary setup
    init() {
      this.updateVisiblePanels();
  
      // Event listeners for buttons
      this.nextButton?.addEventListener('click', () => {
        this.stopAutoLoop();
        this.direction = 1;
        this.movePanel();
      });
  
      this.prevButton?.addEventListener('click', () => {
        this.stopAutoLoop();
        this.direction = -1;
        this.movePanel();
      });
  
      // Event listener for clicking on panels
      this.panels.forEach((panel, index) => {
        panel.addEventListener('click', () => {
          this.stopAutoLoop();
          this.activeIndex = index;
          this.updateVisiblePanels();
        });
      });
  
      // Start auto-loop if enabled
      if (this.settings.autoLoop) {
        this.startAutoLoop();
      }
    }
  
    // Update visible panels based on the active index
    updateVisiblePanels() {
      this.panels.forEach((panel, index) => {
        panel.classList.remove('active', 'visible');
  
        const prevIndex = (this.activeIndex - 1 + this.panels.length) % this.panels.length;
        const nextIndex = (this.activeIndex + 1) % this.panels.length;
  
        if (index === this.activeIndex) {
          panel.classList.add('active', 'visible');
        } else if (index === prevIndex || index === nextIndex) {
          panel.classList.add('visible');
        } else {
          panel.classList.remove('visible');
        }
      });
    }
  
    // Move to the next or previous panel
    movePanel() {
      this.activeIndex = (this.activeIndex + this.direction + this.panels.length) % this.panels.length;
  
      // Reverse direction at the ends
      if (this.activeIndex === this.panels.length - 1) {
        this.direction = -1;
      } else if (this.activeIndex === 0) {
        this.direction = 1;
      }
  
      this.updateVisiblePanels();
    }
  
    // Start the auto-loop
    startAutoLoop() {
      this.interval = setInterval(() => this.movePanel(), this.settings.loopInterval);
    }
  
    // Stop the auto-loop
    stopAutoLoop() {
      clearInterval(this.interval);
    }
  }
  
  // Export for use in other files
//   export default AccordionSlider;
  