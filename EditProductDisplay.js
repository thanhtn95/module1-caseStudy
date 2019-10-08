function getProductFromUrl(arr) {
    let productId = window.location.href.split('?').pop();
    let tmpproduct;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].getId() == productId) {
            tmpproduct = arr[i];
            break;
        }
    }
    return tmpproduct;
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

let tmp = getProductFromUrl(productList);
document.getElementById('editbtn').innerHTML='<button type="button"  onclick="editProduct('+tmp.getId()+')">Change Product Info</button>'
showInfo(tmp);