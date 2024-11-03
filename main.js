function fetchProducts() {
    const url = 'https://www.course-api.com/javascript-store-products';
    const productContainer = document.getElementById('product-container');

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response failed');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); 
            productContainer.innerHTML = '';

  
            Array.isArray(data) 
                ? data.forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.classList.add('product');

                    productDiv.innerHTML = `
                        <h2>${product.name}</h2>
                        <p>Price: $${product.price}</p>
                        <img src="${product.image}" alt="${product.name}" />
                    `;

                    productContainer.appendChild(productDiv);
                })
                : (console.error('Expected data to be an array, but got:', data),
                   productContainer.innerHTML = '<p>No products available.</p>');
        })
        .catch(error => {
            console.error('Fetch error loading products:', error);
            productContainer.innerHTML = '<p>Failed to load products.</p>';
        });
}


fetchProducts();
console.log(data)
