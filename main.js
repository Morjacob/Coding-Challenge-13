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
       
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <img src="${product.image}" alt="${product.name}" />
            <p>${product.description}</p>
        `;
        productContainer.appendChild(productCard);
    });
}


document.addEventListener('DOMContentLoaded', fetchProducts);
