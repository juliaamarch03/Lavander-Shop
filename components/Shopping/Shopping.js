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
              <div class="form-inner">
              <table>
                  ${htmlCatalog}
              </table>
              <table>
                  <td  id="suma">Сума:  </td>
                  <td id="rez" name="user_suma">${sumCatalog.toLocaleString()} UAN</td>
              </table>
              <div class="form-inner">
                <hr id="h">
                <form action="mail.php" method="POST">
                <input type="text" class="ip" name="user_name" placeholder="ПІБ"><br>
                <input type="text" class="ip" name="user_phone" placeholder="Номер телефону"><br>
                <input type="email" class="ip" name="user_email" placeholder="Email(не обов'язково)"><br>
                <input type="text" class="ip" name="user_oblast" placeholder="Область"><br>
                <input type="text" class="ip" name="user_city" placeholder="Місто"><br>
                <input type="text" class="ip" name="user_numpost" placeholder="Відділення пошти"><br><br><br><br><br>
                <button type="submit" class="bttn" class="btn btn-primary">Підтвердити замовлення
                </button>
                </form>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
                <script src="http://getbootstrap.com/assets/js/ie10-viewport-bug-workaround.js"></script>
            </div>
          </div>
    `;
    ROOT_SHOPPING.innerHTML = html;
  }
}

const shoppingPage = new Shopping();
