function retriveList(key) {
    let retriveList = localStorage.getItem(key);
    let List = JSON.parse(retriveList);
    let list = [];
    if (key.includes('user')) {
        for (let i = 0; i < List.length; i++) {
            list.push(new User(List[i].id, List[i].name, List[i].gender, List[i].dob, List[i].username, List[i].password, List[i].positon, List[i].salary));
        }
    } else {
        for (let i = 0; i < List.length; i++) {
            list.push(new Product(List[i].id, List[i].name, List[i].type,List[i].spec, List[i].price, List[i].imgurl));
        }
    }
    return list;
}

function getUserFromUrl(arr) {
    let userId = window.location.href.split('?').pop();
    localStorage.setItem('currentUser',userId);
    let user;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].getId() == userId) {
            user = arr[i];
            break;
        }
    }
    return user;
}

function display(user) {
    let userlegend = document.getElementById("userLegend");
    let userPos = document.getElementById("userPos");
    userlegend.innerText = "Welcome, " + user.getName();
    userPos.innerText = user.getPosition();
    if (user.getPosition() == 'Owner' || user.getPosition() == 'Store Manager') {
        document.getElementById('managebtn').innerHTML = '<button type="button" onclick="">Manage Employees</button>';
    }
}

function displayProduct(products) {
    let tbl = document.getElementById('productTbl');
    tbl.innerHTML = '<tr><td>ID</td><td>Product Name</td><td>Type</td><td>Spec</td><td>Price</td><td>Product Image</td><td></td><td></td></tr>'
    for (let i = 0; i < products.length; i++) {
        tbl.innerHTML += '<tr><td>' + products[i].getId() + '</td><td>' + products[i].getName() + '</td><td>' + products[i].getType() + '</td><td>'+products[i].spec+'</td><td>' + products[i].getPrice() + ' $</td><td><img src="' + products[i].getImgurl() + '" style="width: 150px; height: 70px"></td><td><button>Edit</button></td><td><button>Delete</button></td></tr>'
    }
}

let users = retriveList('userList');
let products = retriveList('productList');
let user = getUserFromUrl(users);
display(user);
displayProduct(products);

