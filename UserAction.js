function retriveList(key) {
    let retriveList = localStorage.getItem(key);
    let List = JSON.parse(retriveList);
    let list = [];
        for (let i = 0; i < List.length; i++) {
            list.push(new User(List[i].id, List[i].name, List[i].gender, List[i].dob, List[i].username, List[i].password, List[i].positon, List[i].salary));
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
}

let users = retriveList('userList');
let currentUser = getUserFromUrl(users);
displayUserInfo(currentUser);

