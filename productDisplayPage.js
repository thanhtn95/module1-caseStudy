let userId = window.location.href.split('?').pop();
let user;
for(let i = 0; i< users.length;i++){
    if(users[i].getId() == userId){
        user = users[i];
        break;
    }
}
alert("Welcome "+user.getName());