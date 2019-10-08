let User = function (id,name, gender, dob, username, password, position, salary) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.dob = dob;
    this.username = username;
    this.password = password;
    this.positon = position;
    this.salary = salary;

    this.getId = function () {
        return this.id;
    };

    this.setId = function (id) {
        this.id = id;
    }

    this.getName = function () {
        return this.name;
    };

    this.setName = function (name) {
        this.name = name;
    };

    this.getGender = function () {
        return this.gender;
    };

    this.setGender = function (gender) {
        this.gender = gender;
    };
    
    this.getDob = function () {
        return this.dob;
    };

    this.setDob =function (dob) {
        this.dob =dob;
    };

    this.getUsername = function () {
        return this.username;
    };

    this.getPassword = function () {
        return this.password;
    };

    this.setPassword = function (password) {
        this.password = password;
    };

    this.getPosition = function () {
        return this.positon;
    };

    this.setPosition = function (positon) {
        this.positon = positon;
    };

    this.getSalary = function () {
        return this.salary;
    };

    this.setSalary = function (salary) {
        this.salary = salary;
    };
}

function createUser (){
    let users = [];
    users.push(new User(1,"Thanh","male","07/31/1995","zonesama","380617","Owner",0));
    users.push(new User(2,"Henrik Ahnberg","male","12/19/1990","bulldog","pepega","Store Manager",400));
    users.push(new User(3,"Jerry Lundkvist","male","06/04/1991","jerry","fromeu","Employee",200));
    return users;
}
localStorage.setItem('userList',JSON.stringify(createUser()));
