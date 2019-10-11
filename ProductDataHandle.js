let ProductDataHandler = function () {
    this.getProductList = function (key) {
        let retriveList = localStorage.getItem(key);
        let List = JSON.parse(retriveList);
        let list = [];
        for (let i = 0; i < List.length; i++) {
            list.push(new Product(List[i].id, List[i].name, List[i].type, List[i].spec, List[i].price, List[i].imgurl));
        }
        return list;
    };

    this.addProduct = function (list, userId) {
        if (confirm("Are You Sure?")) {
            let name = document.getElementById("name").value;
            let type = document.getElementById("type").value;
            let spec = document.getElementById("spec").value;
            spec = spec.split('--').join('<br>');
            let price = document.getElementById("price").value;
            let imgUrl = document.getElementById("imgUrl").value;
            if(name !="" && type !="" && price !=""){
                let index = 1;
                while(!this.testIndex(index,list)){
                    index++;
                }
                list.push(new Product(index, name, type, spec, price, imgUrl));
                list = list.sort(function (a,b) {
                    return a.id - b.id
                });
                localStorage.setItem('productList', JSON.stringify(list));
                window.location.assign("productsList.html?" + userId);
            }else{
                alert("Don't leave the name and type or price empty!");
            }
        }
    };

    this.deleteProduct = function (id, list, userId) {
        if (confirm("Are You Sure ?")) {
            let tmpList = [];
            for (let i = 0; i < list.length; i++) {
                if (list[i].getId() != id) {
                    tmpList.push(list[i]);
                }
            }
            localStorage.setItem('productList', JSON.stringify(tmpList))
            window.location.assign("productsList.html?" + userId);
        }
    };

    this.getProductFromUrl = function (arr) {
        let productId = window.location.href.split('?').pop();
        let tmpproduct = arr.find(function (item) {
            return item.getId() == productId;
        });
        return tmpproduct;
    };

    this.editProductInfo = function (id, productList, userId) {
        if (confirm("Are You Sure?")) {
            let name = document.getElementById("name").value;
            let type = document.getElementById("type").value;
            let spec = document.getElementById("spec").value;
            spec = spec.split('--').join('<br>');
            let price = document.getElementById("price").value;
            let imgUrl = document.getElementById("imgUrl").value;
            if (name != "" && type != "" && price != "") {
                let index = productList.findIndex(function (item) {
                    return item.getId() == id;
                });
                productList[index].name = name;
                productList[index].type = type;
                productList[index].spec = spec;
                productList[index].price = price;
                productList[index].imgurl = imgUrl;

                localStorage.setItem('productList', JSON.stringify(productList));
                window.location.assign("productsList.html?" + userId);
            }else{
                alert("Don't leave the name and type or price empty!");
            }
        }
    };

    this.testIndex = function (index, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].getId() == index) return false;
        }
        return true;
    };
}
