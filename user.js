let User = function (name, gender, dob, username, password, position, salary) {
    let _id = users.length+1;
    let _name = name;
    let _gender = gender;
    let _dob = dob;
    let _username = username;
    let _password = password;
    let _positon = position;
    let _salary = salary;

    this.getId = function () {
        return _id;
    };

    this.getName = function () {
        return _name;
    };

    this.setName = function (name) {
        _name = name;
    };

    this.getGender = function () {
        return _gender;
    };

    this.setGender = function (gender) {
        _gender = gender;
    };
    
    this.getDob = function () {
        return _dob;
    };

    this.setDob =function (dob) {
        _dob =dob;
    };

    this.getUsername = function () {
        return _username;
    };

    this.getPassword = function () {
        return _password;
    };

    this.setPassword = function (password) {
        _password = password;
    };

    this.getPosition = function () {
        return _positon;
    };

    this.setPosition = function (positon) {
        _positon = positon;
    };

    this.getSalary = function () {
        return _salary;
    };

    this.setSalary = function (salary) {
        _salary = salary;
    };
}

let users = [];
users.push(new User("Thanh","male","07/31/1995","zonesama","380617","Owner",0));
users.push(new User("Henrik Ahnberg","male","12/19/1990","bulldog","pepega","Store Manager",400));
users.push(new User("Jerry Lundkvist","male","06/04/1991","jerry","fromeu","Employee",200));