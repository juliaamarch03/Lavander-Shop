class Header{
  handlerOpenShoppingPage(){
      shoppingPage.render();
}

  render(count){
    const html = `
      <div class="header-container">
            <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                <p id="pp">${count}</p></div>
      </div>
    `;
    ROOT_HEADER.innerHTML = html;
  }
}
const headerPage = new Header();
const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);
