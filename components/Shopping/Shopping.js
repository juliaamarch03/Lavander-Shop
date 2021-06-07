class Shopping{

  handleClear(){
    ROOT_SHOPPING.innerHTML = '';
  }

  render(){
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';
    let sumCatalog = 0;

    CATALOG.forEach(({ id,img,name, price}) => {
          if(productsStore.indexOf(id)!==-1){
            htmlCatalog += `
                <tr>
                    <td><img class="shopping-element_img" src="${img}" /></td>
                    <td class="shopping-element_name">${name}</td>
                    <td class="shopping-element_price">${price.toLocaleString()} UAN</td>
                    <td></td>
                </tr>
            `;
            sumCatalog += price;
          }
    });

    const html=`
          <div class="shopping-container">
          <h2 id="f">Ваше замовлення</h2><br>
          <div class="shopping-close" onclick="shoppingPage.handleClear();"></div>
              <table>
                  ${htmlCatalog}
              </table>
              <table>
                  <td  id="suma">Сума:  </td>
                  <td id="rez">${sumCatalog.toLocaleString()} UAN</td>
              </table>
              <div class="form-inner">
                <hr id="h">
                <input type="text" class="ip" placeholder="ПІБ"><br>
                <input type="text" class="ip" placeholder="Номер телефону"><br>
                <input type="email" class="ip" placeholder="Email(не обов'язково)"><br>
                <input type="text" class="ip" placeholder="Область"><br>
                <input type="text" class="ip" placeholder="Місто"><br>
                <input type="text" class="ip" placeholder="Відділення пошти"><br><br><br><br><br>
                <a href="lastp.html" class="bttn" onclick="localStorage.clear(); location.reload();">Підтвердити замовлення</a><br>
            </div>
          </div>
    `;
    ROOT_SHOPPING.innerHTML = html;
  }
}

const shoppingPage = new Shopping();
