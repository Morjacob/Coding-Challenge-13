function fetchProducts() {
    const url = 'https://www.course-api.com/javascript-store-products';
    const productContainer = document.getElementById('product-container');

    fetch(url)
        .then(response => {
            console.log('Response Status:', response.status); 
            if (!response.ok) {
                throw new Error('Network response failed');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data received:', data); 
            productContainer.innerHTML = '';

            if (Array.isArray(data)) {
                data.forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.classList.add('product');

                
                    productDiv.innerHTML = `
                        <h2>${product.Name}</h2>
                        <p>Price: $${product.Price}</p>
                        <img src="${product.Image}" alt="${product.Name}" />
                    `;

                    productContainer.appendChild(productDiv);
                });
            } else {
                console.error('Expected data to be an array, but got:', data);
                productContainer.innerHTML = '<p>No products available.</p>';
            }
        })
        .catch(error => {
            console.error('Fetch error loading products:', error);
            productContainer.innerHTML = '<p>Failed to load products.</p>';
        });
}
document.addEventListener('DOMContentLoaded', fetchProducts);