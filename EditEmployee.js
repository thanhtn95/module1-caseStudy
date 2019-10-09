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

displayDroplist(selectedUser);



