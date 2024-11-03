

const apiUrl = 'https://www.course-api.com/javascript-store-products';

function fetchProducts() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response failed ' + response.statusText);
            }
            return response.json(); //parsing the JSON response
        })
        .then(data => {
            const productContainer = document.getElementById('product-container');
            productContainer.innerHTML = ''; // initialize with empty container

            data.forEach(product => {
                const { company, price, name, image } = product.fields;
                const productImageUrl = image[0].url; // accessing the api url

                // adding all the product details dynamically into the html
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
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('product-container').innerHTML = '<p>Failed to load products. Please try again later.</p>';
        });
}

document.addEventListener('DOMContentLoaded', fetchProducts);

