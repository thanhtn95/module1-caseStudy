function display(user) {
    let userlegend = document.getElementById("userLegend");
    let userPos = document.getElementById("userPos");
    userlegend.innerText = "Welcome, " + user.getName();
    userPos.innerText = user.getPosition();
}

function displayEmployee(users,user) {
    let tbl = document.getElementById('employeeTbl');
    tbl.innerHTML = '<tr><td>ID</td><td>Name</td><td>Gender</td><td>Date of birth</td><td>Username</td><td>Position</td><td>Salary</td><td></td><td></td></tr>'
    for (let i = 0; i < users.length; i++) {
        if(users[i].getId() == user.getId()){
            tbl.innerHTML += '<tr><td>' + users[i].getId() + '</td><td>' + users[i].getName() + '</td><td>' + users[i].getGender() + '</td><td>' + users[i].getDob() + '</td><td>' + users[i].getUsername() + '</td><td>'+users[i].getPosition()+'</td><td>'+users[i].getSalary()+' $</td><td><button type="button" onclick="gotoEdit(' + users[i].getId() + ')">Edit</button></td><td></td></tr>'
        }else{
            tbl.innerHTML += '<tr><td>' + users[i].getId() + '</td><td>' + users[i].getName() + '</td><td>' + users[i].getGender() + '</td><td>' + users[i].getDob() + '</td><td>' + users[i].getUsername() + '</td><td>'+users[i].getPosition()+'</td><td>'+users[i].getSalary()+' $</td><td><button type="button" onclick="gotoEdit(' + users[i].getId() + ')">Edit</button></td><td><button type="button" onclick="gotoDelete(' + users[i].getId() + ')">Delete</button></td></tr>'
        }
    }
}
function goBack(){
    window.location.assign('products.html?'+user.getId());
}

let userhandler = new UserDataHandler();
let users = userhandler.getUserList('userList');
let user = userhandler.getUserFromUrl(users);
let list = userhandler.getEmployeeListByPosition(user,users);
display(user);
displayEmployee(list,user);
