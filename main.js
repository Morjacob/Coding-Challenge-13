


const fetchProduct = document.getElementById(`product-container`);



    fetch('https://www.course-api.com/javascript-store-products')
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
            document.getElementById('product-container').innerHTML = '<p>Failed to load products</p>';
        });


        function displayProducts(products) {
            const productHTML = products.map(product => `
                  <img src="${productImageUrl}" alt="${name}" class="product-image" />
            <div class="product-details">
                <h2>${name}</h2>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Price:</strong> $${price}</p>
            </div>
            `).join('');
        
            document.getElementById('product-container').innerHTML = productHTML;
        }


document.addEventListener('DOMContentLoaded', fetchProduct);

