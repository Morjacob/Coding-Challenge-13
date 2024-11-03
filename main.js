const apiUrl = 'https://www.course-api.com/javascript-store-products';

function fetchProducts() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayProducts(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('product-container').innerHTML = '<p>Failed to load products. Please try again later.</p>';
        });
}

function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const { company, price, name, image } = product.fields;
        const productImageUrl = image[0].url;

        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${productImageUrl}" alt="${name}" class="product-image" />
            <div class="product-details">
                <h2>${name}</h2>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Price:</strong> $${price}</p>
            </div>
        `;
        productContainer.appendChild(productCard);
    });
}

document.addEventListener('DOMContentLoaded', fetchProducts);
