let producthandler = new ProductDataHandler();
let productList = producthandler.getProductList('productList');
let tmp = producthandler.getProductFromUrl(productList);
let userId = localStorage.getItem('currentUser');
document.getElementById('editbtn').innerHTML = '<button type="button"  onclick="goToEditProduct(' + tmp.getId() + ')">Change Product Info</button>'
showInfo(tmp);

function GoBack() {
    window.location.assign("products.html?" + userId);
}

function goToEditProduct(id) {
    producthandler.editProductInfo(id, productList, userId);
}

function showInfo(obj) {
    let name = document.getElementById("name");
    let type = document.getElementById("type");
    let spec = document.getElementById("spec");
    let price = document.getElementById("price");
    let imgUrl = document.getElementById("imgUrl");
    name.value = obj.getName();
    type.value = obj.getType();
    spec.value = obj.getSpec().split('<br>').join('--');
    price.value = obj.getPrice();
    imgUrl.value = obj.getImgurl();
}