const productsContainer = document.querySelector('.products')

fetch('https://fakestoreapi.com/products/category/jewelery')
  .then(res => res.json())
  .then(data =>{
    for(const product of data){
      const html = `
                <div id="${product.id}" class="product">
                    <p id="title">${product.title}</p>
                    <img id="product-img" src="${product.image}" />
                    <p id="price">${product.price}</p>
                </div>
            `;
            productsContainer.insertAdjacentHTML('beforebegin', html)
    }
  })
  .catch(err => console.log(err, "My error"));