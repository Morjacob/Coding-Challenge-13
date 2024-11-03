


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
                <div class="Product">
                    <h3>Ticket ID: ${product.id}</h3>
                    <p><strong>product price:</strong> User ${product.price}</p>
                    <p><strong>productimage:</strong> ${product.image}</p>
                    <p><strong>product name:</strong> ${product.name}</p>
                </div>
            `).join('');
        
            document.getElementById('product-container').innerHTML = productHTML;
        }


document.addEventListener('DOMContentLoaded', fetchProduct);

