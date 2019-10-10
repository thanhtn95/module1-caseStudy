let producthandler = new ProductDataHandler();
let userId = localStorage.getItem('currentUser');

function GoBack() {
    window.location.assign("productsList.html?" + userId);
}
function goToAdd() {
    let products = producthandler.getProductList('productList');
    producthandler.addProduct(products,userId);
}
