let UserDataHandler = function () {
    this.getUserList = function (key) {
        let retriveList = localStorage.getItem(key);
        let List = JSON.parse(retriveList);
        let list = [];
        for (let i = 0; i < List.length; i++) {
            list.push(new User(List[i].id, List[i].name, List[i].gender, List[i].dob, List[i].username, List[i].password, List[i].positon, List[i].salary));
        }
        return list;
    };

    this.getUserFromUrl = function (arr) {
        let userId = window.location.href.split('?').pop();
        localStorage.setItem('currentUser', userId);
        let user;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].getId() == userId) {
                user = arr[i];
                break;
            }
        }
        return user;
    };

    this.SelfEditUserInfo = function (userList, userId) {
        if (confirm("Are You Sure?")) {
            let id = document.getElementById('id').value;
            let name = document.getElementById('name').value;
            let gender = document.getElementById('gender').value;
            let dob = document.getElementById('dob').value;
            let password = document.getElementById('password').value;
            let index;
            for (let i = 0; i < userList.length; i++) {
                if (userList[i].getId() == id) {
                    index = i;
                    break;
                }
            }

            userList[index].name = name;
            userList[index].gender = gender;
            userList[index].dob = dob;
            userList[index].password = password;
            localStorage.setItem('userList', JSON.stringify(userList));
            window.location.assign("products.html?" + userId);
        }
    }

    this.getEmployeeListByPosition = function (user, list) {
        if (user.getPosition() == 'Owner') {
            return list;
        } else if (user.getPosition() == 'Store Manager') {
            let tmp = [];
            for (let i = 0; i < list.length; i++) {
                if (list[i].getId() == user.getId()) {
                    tmp.push(list[i]);
                    break;
                }
            }
            for (let i = 0; i < list.length; i++) {
                if (list[i].getPosition() != 'Owner' && list[i].getPosition() != 'Store Manager') {
                    tmp.push(list[i]);
                }
            }
            return tmp;
        }
    };
    
    this.deleteEmployee = function (id,list,userId) {
        if(confirm("Are you sure you want to terminate this employee?")){
            let tmp = [];
            for(let i =0; i<list.length;i++){
                if(list[i].getId() != id){
                    tmp.push(list[i]);
                }
            }
            localStorage.setItem('userList', JSON.stringify(tmp));
            window.location.assign("employee.html?" + userId);
        }
    }
}