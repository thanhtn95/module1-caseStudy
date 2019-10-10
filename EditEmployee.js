let userhandler = new UserDataHandler();
let currentUserId = localStorage.getItem('currentUser');
let users = userhandler.getUserList('userList');
let currentUser = userhandler.getUserFromId(currentUserId,users);
let selectedUser = userhandler.getEditedUserFromUrl(users);

function displayDroplist(user) {
    let positon = document.getElementById('position');
    if (user.getPosition() == 'Owner') {
        positon.innerHTML = '<option value="Owner">Owner</option>';
        return;
    }else{
        positon.innerHTML = '<option value="Employee">Employee</option>';
        positon.innerHTML += '<option value="Store Manager">Store Manager</option>';
    }
}
function setDroplist(user) {
    let positon = document.getElementById('position');
    for(let i =0 ; i <positon.options.length;i++){
        if(positon.options[i].value == user.getPosition()){
            positon.selectedIndex = i;
        }
    }
}

function DisplaySelectedUserInfo(user) {
    let username = document.getElementById('username');
    let name = document.getElementById('name');
    let gender = document.getElementById('gender');
    let dob = document.getElementById('dob');
    let password = document.getElementById('password');
    let salary = document.getElementById('salary');

    name.value = user.getName();
    gender.value = user.getGender();
    dob.value = user.getDob();
    username.value = user.getUsername();
    password.value = user.getPassword();
    salary.value = user.getSalary();
}
function goBack() {
    window.location.assign('employeesList.html?'+currentUserId);
}

function goToEditEmployeeInfo() {
    userhandler.EditUserInfo(selectedUser.getId(),users,currentUser.getId());
}
displayDroplist(selectedUser);
setDroplist(selectedUser);
DisplaySelectedUserInfo(selectedUser);




