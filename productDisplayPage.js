function display(user) {
    let userlegend = document.getElementById("userLegend");
    let userPos = document.getElementById("userPos");
    userlegend.innerText = "Welcome, " + user.getName();
    userPos.innerText = user.getPosition();
    if (user.getPosition() == 'Owner' || user.getPosition() == 'Store Manager') {
        document.getElementById('managebtn').innerHTML = '<button type="button" onclick="goToEmployeeList()">Manage Employees</button>';
        document.getElementById('addbtn').innerHTML = '<button type="button" onclick="goToAddForm()">Add New Product</button>'
    }
}

function displayProduct(products) {
    let tbl = document.getElementById('productTbl');
    if (user.getPosition() == 'Employee') {
        tbl.innerHTML = '<tr><td>ID</td><td>Product Name</td><td>Type</td><td>Spec</td><td>Price</td><td>Product Image</td></tr>'
        for (let i = 0; i < products.length; i++) {
            tbl.innerHTML += '<tr><td>' + products[i].getId() + '</td><td>' + products[i].getName() + '</td><td>' + products[i].getType() + '</td><td>' + products[i].getSpec() + '</td><td>' + products[i].getPrice() + ' $</td><td><img src="' + products[i].getImgurl() + '" style="width: 150px; height: 70px"></td></tr>'
        }
    } else {
        tbl.innerHTML = '<tr><td>ID</td><td>Product Name</td><td>Type</td><td>Spec</td><td>Price</td><td>Product Image</td><td></td><td></td></tr>'
        for (let i = 0; i < products.length; i++) {
            tbl.innerHTML += '<tr><td>' + products[i].getId() + '</td><td>' + products[i].getName() + '</td><td>' + products[i].getType() + '</td><td>' + products[i].getSpec() + '</td><td>' + products[i].getPrice() + ' $</td><td><img src="' + products[i].getImgurl() + '" style="width: 150px; height: 70px"></td><td><button type="button" onclick="gotoEdit(' + products[i].getId() + ')">Edit</button></td><td><button type="button" onclick="gotoDelete(' + products[i].getId() + ')">Delete</button></td></tr>'
        }
    }
}

function logOut() {
    if (confirm("Are you sure you want to logout?")) {
        window.location.assign("login.html");
    }
}
function goToAddForm() {
    window.location.assign("AddProductForm.html");
}

function gotoEdit(id) {
    window.location.assign('EditProductForm.html?' + id);
}

function gotoUserInfo() {
    window.location.assign('userInfo.html?' + user.getId());
}

function gotoDelete(id) {
    producthandler.deleteProduct(id, products, user.getId());
}
function goToEmployeeList(){
    window.location.assign('employee.html?'+user.getId());
}

let producthandler = new ProductDataHandler();
let userhandler = new UserDataHandler();
let users = userhandler.getUserList('userList')
let products = producthandler.getProductList('productList');
let user = userhandler.getUserFromUrl(users);
display(user);
displayProduct(products);


