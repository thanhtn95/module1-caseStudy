let retriveUsers = localStorage.getItem('userList');
let userList = JSON.parse(retriveUsers);
function login() {
    let un = document.getElementById("username");
    let pw = document.getElementById("password");
    let username = un.value;
    let password = pw.value;
    let flag = false;

    if(username === "" || password ===""){
        alert("Don't leave input empty");
        un.focus();
    }else{
        for(let i = 0 ; i<userList.length;i++){
            if(userList[i].username === username && userList[i].password === password ){
                flag = true;
                window.location.assign("productsList.html?"+userList[i].id);
            }
        }
        if (flag === false){
            alert("Wrong Username or Password");
            un.focus();
        }
    }
}