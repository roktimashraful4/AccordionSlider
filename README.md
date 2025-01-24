# **Accordion Slider Documentation**
## **[Link text](https://6793e4110a25d105b19c14a9--relaxed-faun-b5dec1.netlify.app/ 'Live Demo')**


### **Overview**
The Accordion Slider is a dynamic, interactive slider component that displays a set of images or content panels. It has navigation controls (Next and Previous) and can automatically loop through the items. The active item is highlighted, while adjacent items are shown partially. It is a great addition for galleries, product carousels, or interactive image sliders.

### **Features**
- Dynamic active panel navigation (Next/Previous buttons).
- Adjacent panels are visible but inactive.
- Auto-loop option for continuous sliding.
- Responsive design for different screen sizes.
- CSS animations for smooth transitions.

---

## **Installation**

To use the Accordion Slider in your project, follow the steps below:

### 1. **HTML Setup**
Create a container element for the slider in your HTML file.

```html
<div id="accordion-slider" class="accordion-slider">
  <button>Previous</button>
  <div class="as-panels">
    <div class="as-panel"><img src="image1.jpg" alt="Image 1"></div>
    <div class="as-panel"><img src="image2.jpg" alt="Image 2"></div>
    <div class="as-panel"><img src="image3.jpg" alt="Image 3"></div>
    <div class="as-panel"><img src="image4.jpg" alt="Image 4"></div>
  </div>
  <button>Next</button>
</div>
```

### 2. **CSS Setup**
Ensure the following CSS is included to style the Accordion Slider.

```css
/* Global Styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Accordion Slider Styles */
.accordion-slider {
  max-width: 1200px;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.as-panels {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
  transition: all 0.3s ease-in-out;
}

.as-panel {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  width: 1rem;
  height: 10rem;
  transition: all 0.3s ease-in-out;
  opacity: 0; /* Initially invisible */
  transform: scale(0.8); /* Smaller size for hidden panels */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.as-panel.visible {
  opacity: 1; /* Visible adjacent panels */
  transform: scale(1); /* Restore size for visible panels */
}

.as-panel.active {
  width: 20rem; /* Active panel is wider */
  opacity: 1;
  transform: scale(1.05); /* Slight zoom for emphasis */
  transition: all 0.3s ease-in-out;
}

.as-panel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Button Styles */
button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s;
}

button:hover {
  background-color: #0056b3;
}

/* Responsive Design */
@media (max-width: 768px) {
  .accordion-slider {
    max-width: 100%;
  }

  .as-panel {
    height: 8rem;
  }

  .as-panel.active {
    width: 15rem;
  }

  button {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
}
```

## **Customization Options**
You can customize the Accordion Slider with the following options:

- **`autoLoop`** (boolean): If true, the slider will automatically loop through the panels every few seconds. Default: `false`.
- **`loopInterval`** (integer): Time (in milliseconds) between each auto-loop transition. Default: `3000` ms.

Example of initializing the slider with auto-loop:
```javascript
const slider = new AccordionSlider('#accordion-slider', {
  autoLoop: true,
  loopInterval: 5000,
});
```

---

## **Methods**
### 1. `nextPanel()`
Moves to the next panel.

### 2. `prevPanel()`
Moves to the previous panel.

### 3. `setActivePanel(index)`
Sets the specified panel as active, based on its index.

Example usage:
```javascript
slider.setActivePanel(2); // Activates the third panel.
```

---

## **Contributing**
Feel free to fork this repository and create pull requests for any improvements or bug fixes!
