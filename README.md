# Presentation: About this project
Learn to fetch external API by creating 2 pages 1 for overview and other for more information.

# Product API Application

## Overview
This application is a simple web-based product display and detail viewer that fetches data from an external API. It consists of:

1. **Overview Page:** Displays a grid of products, each with an image and a button showing the product name. Users can click the button to view detailed information.
2. **Details Page:** Displays detailed information about a selected product, including its image, price, description, category, and rating. A "Back to Overview" button allows users to return to the main page.

---

## Features
- **Responsive Design:** The layout adjusts seamlessly to different screen sizes.
- **Data Fetching:** Retrieves product data dynamically from [FakeStore API](https://fakestoreapi.com/).
- **Single Page Navigation:** Uses JavaScript to dynamically display pages without reloading.
- **DOM Manipulation:** Utilizes the Document Object Model (DOM) to dynamically create and update HTML elements, ensuring an interactive user experience.

---

## Technologies Used

### HTML
- **Semantic Elements:** The structure uses semantic tags like `<div>`, `<h1>`, `<p>`, etc., for clarity.

### CSS
- **Grid Layout:** Implements a flexible grid layout for displaying products.
- **Styling:** Ensures uniformity of product images and buttons.
- **Responsive Design:** Adapts to various device widths with auto-fit grids.

### JavaScript
- **Dynamic Rendering:** Generates HTML elements dynamically to display data.
- **Event Handling:** Uses `onclick` events to switch between pages and display details.
- **API Integration:** Fetches product data via the `fetch()` API.
- **DOM Properties and Methods:** Utilizes properties like `createElement`, `appendChild`, and `innerHTML` to dynamically generate and update the web page.

---

## How It Works

1. **Fetch Data:**
   - JavaScript fetches product data from the FakeStore API.
   - The data is parsed into a usable format.

2. **Render Products:**
   - The products are displayed on the overview page in a grid format.
   - Each product has a fixed-size image and a button for its name.

3. **View Details:**
   - Clicking a product's button navigates to the details page.
   - The selected product's information is dynamically rendered using DOM manipulation.

4. **Return to Overview:**
   - Users can return to the main overview by clicking the back button.


---

## Resources and References
- [FakeStore API Documentation](https://fakestoreapi.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks - Grid Layout Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

---
