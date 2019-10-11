let Product = function (id, name, type, spec, price, imgurl) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.spec = spec;
    this.price = price;
    this.imgurl = imgurl;

    this.getId = function () {
        return this.id;
    };

    this.getName = function () {
        return this.name;
    };

    this.setName = function (name) {
        this.name = name;
    };

    this.getType = function () {
        return this.type;
    };

    this.setType = function (type) {
        this.type = type;
    };

    this.getSpec = function () {
        return this.spec;
    }

    this.setSpec = function (spec) {
        this.spec = spec;
    }

    this.getPrice = function () {
        return this.price;
    };

    this.setPrice = function (price) {
        this.price = price;
    };

    this.getImgurl = function () {
        return this.imgurl;
    };

    this.setImg = function (imgurl) {

    };
}

function createProduct() {
    let products = [];
    products.push(new Product(1, "Titan RTX", "Graphic Card", "Architecture: NVIDIA Turing <br>" +
        "Frame Buffer: 24GB GDDR6<br> Boots Clock: 1770 MHz <br> Tensor Cores: 576<br>CUDA Cores: 4608", 2500, 'https://www.nvidia.com/content/dam/en-zz/Solutions/titan/titan-rtx/nvidia-titan-rtx-shop-2c50-d.png'));
    products.push(new Product(2, "AMD Ryzen™ Threadripper™ 2990WX", "CPU", "# of CPU Cores: 32; # of Threads: 64<br>Max Boost Clock Up to 4.2GHz<br>Total L1 Cache 3MB<br>Total L2 Cache 16MB<br>Total L3 Cache 64MB<br>Unlocked: Yes<br>Package: sTR4; Default TDP / TDP:250W", 1800, 'https://www.amd.com/system/files/styles/992px/private/2019-01/207002-amd-ryzen-threadripper-2-campaign-chip-right-facing-1260x709.png?itok=rRPz76Hx'));
    products.push(new Product(3,"Intel Core I9-9900K","CPU",'CoreCount: 8; ThreadCount: 16<br>ClockSpeed: 3.60 GHz<br>ClockSpeedMax: 5.00 GHz<br>Cache: 16 MB Intel® Smart Cache<br>Bus: 8 GT/s<br>MaxTDP: 95 W',475.99,'http://static.techspot.com/images/products/2018/processors/intel/org/2018-10-19-product-2.jpg'));
    products.push(new Product(4,'NVIDIA RTX 2080 super','Graphic Card','GPU Architecture: Turing<br>RTX-OPS:  63 T<br> Boost Clock:  1815 MHz<br> Frame Buffer: 8 GB GDDR6<br> Memory Speed:  15.5 Gbps',699,'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/graphic-cards/rtx-2080-super/geforce-rtx-2080-super-shop-D.png'))
    return products;
}
let testList = localStorage.getItem('productList');
if(testList == null){
    localStorage.setItem('productList', JSON.stringify(createProduct()));
}