// Define the URL of the external API
const apiUrl = "https://api.noroff.dev/api/v1/gamehub";


// Get the product list container element
const productList = document.getElementById('product-list');

// Fetch data from the API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Process the data and create clickable links
        data.forEach(product => {
            const productItem = document.createElement('li');
            const productLink = document.createElement('a');
            productLink.href = "product.html";
            productLink.textContent = product.title;
            productItem.appendChild(productLink);
            productList.appendChild(productItem);
        });
    })

	.catch((error) => {
		products.innerHTML = '<div class="error">There was an error fetching the games</div>';
		console.error("Error fetching data:", error);
	});