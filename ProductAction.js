function retriveList(key) {
    let retriveList = localStorage.getItem(key);
    let List = JSON.parse(retriveList);
    let list = [];
    for (let i = 0; i < List.length; i++) {
        list.push(new Product(List[i].id, List[i].name, List[i].type, List[i].spec, List[i].price, List[i].imgurl));
    }
    return list;
}

let productList = retriveList('productList');
let userId = localStorage.getItem('currentUser');

function addProduct() {
    if (confirm("Are You Sure?")) {
        let name = document.getElementById("name").value;
        let type = document.getElementById("type").value;
        let spec = document.getElementById("spec").value;
        spec= spec.split('--').join('<br>');
        let price = document.getElementById("price").value;
        let imgUrl = document.getElementById("imgUrl").value;
        let id = 1;
        for (let i = 0; i < productList.length; i++) {
            if (id != productList[i].getId()) {

            } else {
                id++;
            }
        }
        productList.push(new Product(id, name, type, spec, price, imgUrl));
        localStorage.setItem('productList', JSON.stringify(productList));
        window.location.assign("product.html?" + userId);
    }
}

function deleteProduct(id) {
    if(confirm("Are You Sure ?")){
        let tmpList = [];
        for (let i = 0; i < productList.length; i++) {
            if (productList[i].getId() != id) {
                tmpList.push(productList[i]);
            }
        }
        localStorage.setItem('productList', JSON.stringify(tmpList))
        window.location.assign("product.html?" + userId);
    }
}

function editProduct(id) {
    if (confirm("Are You Sure?")) {
        let name = document.getElementById("name").value;
        let type = document.getElementById("type").value;
        let spec = document.getElementById("spec").value;
        spec= spec.split('--').join('<br>');
        let price = document.getElementById("price").value;
        let imgUrl = document.getElementById("imgUrl").value;
        let index;
        for(let i =0; i<productList.length;i++){
            if(productList[i].getId() == id){
                index = i;
                break;
            }
        }
        productList[index].name = name;
        productList[index].type = type;
        productList[index].spec = spec;
        productList[index].price = price;
        productList[index].imgurl = imgUrl;

        localStorage.setItem('productList', JSON.stringify(productList));
        window.location.assign("product.html?" + userId);
    }
}

function GoBack() {
    window.location.assign("product.html?" + userId);
}
