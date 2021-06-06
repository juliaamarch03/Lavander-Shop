class Products{

//повертає товари в каталог
  render(){
    let htmlCatalog = '';
    CATALOG.forEach(({id,name,price,img}) =>{
       htmlCatalog += `
          <li class="products-element">
             <span class="products-element_name">${name}</span>
             <img class="products-element_img" src="${img}"/>
             <span class="products-element_price">🌸 ${price.toLocaleString()} UAN</span>
             <button class="products-element_btn">В корзину</button>
          </li>
       `;
    });
    const html = `
        <ul class="products-container">
            ${htmlCatalog}
        </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}
const productsPage = new Products();
productsPage.render();
