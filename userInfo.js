let userhandler = new UserDataHandler();
let userList = userhandler.getUserList('userList');
let user = userhandler.getUserFromUrl(userList);
displayUserInfo(user);
let userId = localStorage.getItem('currentUser');
function displayUserInfo(obj){
    let id = document.getElementById('id');
    let name = document.getElementById('name');
    let gender = document.getElementById('gender');
    let dob = document.getElementById('dob');
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');

    id.value = obj.getId();
    name.value = obj.getName();
    gender.value = obj.getGender();
    dob.value = obj.getDob();
    username.value = obj.getUsername();
    password.value = obj.getPassword();
    position.value = obj.getPosition();
    salary.value = obj.getSalary();

    document.getElementById('editbtn').innerHTML='<button type="button" onclick="goToEditUser()">Edit</button>';
}
function GoBack() {
    window.location.assign("productsList.html?" + userId);
}
function goToEditUser() {
    userhandler.SelfEditUserInfo(userList,userId);
}