// Define the URL of the external API
const apiUrl = "https://api.noroff.dev/api/v1/gamehub";

// Get the product-list container element
const productList = document.getElementById("product-list");


// Fetch data from the API
fetch(apiUrl)
	.then((response) => response.json())
	.then((data) => {
		// Process the data and display it in the product-list container
		data.forEach((product) => {
			const productItem = document.createElement("div");
			productItem.classList.add("product-item");
            const productLink = document.createElement('a')
            productLink.href = "product1.html";
            productLink.textContent = product.title;
            productItem.appendChild(productLink);
            productList.appendChild(productItem);
			const description = document.createElement("p");
			description.innerText = product.description;
			productItem.append(description);
			const image = document.createElement("img");
			image.src = product.image;
			productItem.append(image);
			productList.append(productItem);

		});
	})

	.catch((error) => {
		productList.innerHTML = '<div class="error">There was an error fetching the games</div>';
		console.error("Error fetching data:", error);
	});

