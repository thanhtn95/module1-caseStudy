let Product = function (name,type,price,img) {
     let _id = products.length+1+10000;
     let _name = name;
     let _type = type;
     let _price = price;
     let _img = img;

     this.getId = function () {
         return _id;
     };

     this.getName = function () {
         return _name;
     };

     this.setName = function (name) {
         _name = name;
     };

     this.getType = function () {
         return _type;
     };

     this.setType =function (type) {
         _type = type;
     };

     this.getPrice = function () {
         return _price;
     };

     this.setPrice = function (price) {
         _price = price;
     };

     this.img = function () {
         return _img;
     };

     this.setImg = function (img) {

     };
}

let products =[];
for(let i = 0 ; i<10;i++){
    products.push(new Product("LTT","WEB",500000,"x"));
}
console.log(products[2].getId());