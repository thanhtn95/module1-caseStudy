
function login() {
    let un = document.getElementById("username");
    let pw = document.getElementById("password");
    let username = un.value.trim();
    let password = pw.value.trim();
    let flag = false;

    if(username === "" || password ===""){
        alert("Don't leave input empty");
        un.focus();
    }else{
        for(let i = 0 ; i<users.length;i++){
            if(users[i].getUsername() === username && users[i].getPassword() === password ){
                flag = true;
                window.location.assign("product.html?"+users[i].getId());
            }
        }
        if (flag === false){
            alert("Wrong Username or Password");
            un.focus();
        }
    }
}