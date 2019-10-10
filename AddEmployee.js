let userhandler = new UserDataHandler();
let users = userhandler.getUserList('userList');
let user = userhandler.getUserFromUrl(users);

function displayForm(user) {
    let positon = document.getElementById('position');

    positon.innerHTML='<option value="Employee">Employee</option>';
    if(user.getPosition()=='Owner'){
        positon.innerHTML+='<option value="Store Manager">Store Manager</option>';
    }
}

function goToAddEmployee() {
    userhandler.addNewEmployee(users,user.getId());
}

function GoBack() {
    window.location.assign("employeesList.html?" + user.getId());
}

displayForm(user);