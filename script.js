 // API endpoint to fetch product data
 const apiUrl = 'https://fakestoreapi.com/products';

 // Fetch data from the API and handle errors
 async function fetchData() {
     try {
         const response = await fetch(apiUrl); // Perform API request
         const data = await response.json(); // Parse JSON response
         displayData(data); // Display the fetched data
     } catch (error) {
         console.error('Error fetching data:', error); // Log errors
     }
 }

 // Render product data on the overview page
 function displayData(data) {
     const container = document.getElementById('product-container');
     container.innerHTML = ''; // Clear any existing content

     // Iterate over each product item
     data.forEach(item => {
         const productCard = document.createElement('div'); // Create a container for each product
         productCard.className = 'product-card';

         // Add product image
         const productImage = document.createElement('img');
         productImage.src = item.image;
         productImage.alt = item.title;
         productImage.className = 'product-image';

         // Add product name as a clickable button
         const productName = document.createElement('button');
         productName.textContent = item.title; // Display the product title
         productName.className = 'product-name';
         productName.onclick = () => showDetails(item); // Show details on click

         // Append elements to the product card
         productCard.appendChild(productImage);
         productCard.appendChild(productName);
         container.appendChild(productCard); // Add the card to the container
     });
 }

 // Show detailed information for a specific product
 function showDetails(item) {
     const detailsContainer = document.getElementById('details-container');
     detailsContainer.innerHTML = `
         <h2>${item.title}</h2>
         <img src="${item.image}" alt="${item.title}" class="detail-image"/>
         <p><strong>Price:</strong> $${item.price}</p>
         <p><strong>Description:</strong> ${item.description}</p>
         <p><strong>Category:</strong> ${item.category}</p>
         <p><strong>Rating:</strong> ${item.rating.rate} (${item.rating.count} reviews)</p>
         <button onclick="goBack()">Back to Overview</button>
     `; // Populate details page with item data

     // Hide overview and show details page
     document.getElementById('overview-page').style.display = 'none';
     document.getElementById('details-page').style.display = 'block';
 }

 // Return to the overview page from the details page
 function goBack() {
     document.getElementById('details-page').style.display = 'none'; // Hide details page
     document.getElementById('overview-page').style.display = 'block'; // Show overview page
 }

 // Initiate the data fetch and render process
 fetchData();