const product = [
    { id: 1, image: "./assets/img/product1.webp", productname: "Card màn hình GALAX Geforce GTX 1650 EX (1-Click OC) 4GB GDDR6 65SQL8DS66E6", productprice: "6.490.000 ₫", productcost: "6.890.000 ₫", productdiscount: "-5.81%" },
    { id: 2, image: "./assets/img/product2.webp", productname: "Nguồn máy tính SEGOTEP SG-750AE - 650W - 80 Plus", productprice: "999.000 ₫", productcost: "1.199.000 ₫", productdiscount: "-16.68%" },
    { id: 3, image: "./assets/img/product3.webp", productname: "Nguồn máy tính SEGOTEP GP-850G - 750W - 80 Plus Gold - Full Modular", productprice: "2.090.000 ₫", productcost: "2.520.000 ₫", productdiscount: "-17.06%" },
    { id: 4, image: "./assets/img/product4.webp", productname: "PC Dell Vostro 3888 MT RJMM6D3(Intel Core i5-10400/8GB/1TBHDD/Windows 11 Home SL 64-bit + Office 2021 Home & Student/WiFi 802.11ac)", productprice: "13.490.000 ₫", productcost: "13.990.000 ₫", productdiscount: "-3.57%" },
    { id: 5, image: "./assets/img/product5.webp", productname: "Mainboard ASUS PRIME Z690M-PLUS D4", productprice: "5.290.000 ₫", productcost: "5.590.000 ₫", productdiscount: "-5.37%" },
    { id: 6, image: "./assets/img/product6.webp", productname: "Tản Nhiệt Khí Cpu Idcooling Se-224-Xt Argb V3", productprice: "679.000 ₫", productcost: "759.000 ₫", productdiscount: "-10.54%" },
    { id: 7, image: "./assets/img/product7.webp", productname: "RAM desktop KINGSTON Fury Beast 16GB (1 x 16GB) DDR4 3200MHz (KF432C16BB/16)", productprice: "1.990.000 ₫", productcost: "2.690.000 ₫", productdiscount: "-26.02%" },
    { id: 8, image: "./assets/img/product8.webp", productname: "Laptop MSI GF63 Thin 11SC 662VN ( 15.6' Full HD/ 144Hz/Intel Core i7-11800H/8GB/512GB SSD/NVIDIA GeForce GTX 1650/Windows 11 Home/1.9kg)", productprice: "22.490.000 ₫", productcost: "23.990.000 ₫", productdiscount: "-6.25%" },
    { id: 9, image: "./assets/img/product9.webp", productname: "Thiết bị quan sát/ Camera EZVIZ C3W (4MP)", productprice: "1.550.000 ₫", productcost: "1.550.000 ₫", productdiscount: "0.0%" },
    { id: 10, image: "./assets/img/product10.webp", productname: "Điện thoại Xiaomi Redmi 10C (4GB/128GB) (Blue)", productprice: "3.690.000 ₫", productcost: "4.490.000 ₫", productdiscount: "-17.82%" },
    { id: 11, image: "./assets/img/product11.webp", productname: "Laptop ASUS TUF Gaming FX506HC-HN144W 90NR0724-M00FJ0 ( 15.6' Full HD/ 144Hz/Intel Core i5-11400H/8GB/512GB SSD/NVIDIA GeForce RTX 3050/Windows 11 Home/2.3kg)", productprice: "20.990.000 ₫", productcost: "23.990.000 ₫", productdiscount: "-12.51%" },
    { id: 12, image: "./assets/img/product12.webp", productname: "Thiết bị định tuyến mạng không dây Asus Wifi 6 GT-AX6000", productprice: "12.449.000 ₫", productcost: "13.790.000 ₫", productdiscount: "-9.72%" },
    { id: 13, image: "./assets/img/product13.webp", productname: "Điện Thoại Di Động iPhone 13 Pro Max 256GB Alpine Green (MND03VN/A) (Alpine Green)", productprice: "33.990.000 ₫", productcost: "37.990.000 ₫", productdiscount: "-10.53%" },
    { id: 14, image: "./assets/img/product14.webp", productname: "PC HP ProDesk 400 G7 MT 60U83PA(Intel Core i3-10105/8GB/256GBSSD/Windows 11 Home SL 64-bit/WiFi 802.11ac)", productprice: "10.669.000 ₫", productcost: "10.990.000 ₫", productdiscount: "-2.92%" },
    { id: 15, image: "./assets/img/product15.webp", productname: "Laptop HP Victus 16-d0294TX 5Z9R5PA ( 16.1' Full HD/ 144Hz/Intel Core i5-11400H/8GB/512GB SSD/NVIDIA GeForce RTX 3050Ti/Windows 11 Home SL/2.4kg)", productprice: "24.990.000 ₫", productcost: "28.990.000 ₫", productdiscount: "-13.8%" },
    { id: 16, image: "./assets/img/product16.webp", productname: "Card màn hình GALAX Geforce GTX 1650 EX (1-Click OC) 4GB GDDR6 65SQL8DS66E6", productprice: "6.490.000 ₫", productcost: "6.890.000 ₫", productdiscount: "-5.81%" },
    { id: 17, image: "./assets/img/product17.webp", productname: "Nguồn máy tính SEGOTEP SG-750AE - 650W - 80 Plus", productprice: "999.000 ₫", productcost: "1.199.000 ₫", productdiscount: "-16.68%" },
    { id: 18, image: "./assets/img/product18.webp", productname: "Nguồn máy tính SEGOTEP GP-850G - 750W - 80 Plus Gold - Full Modular", productprice: "2.090.000 ₫", productcost: "2.520.000 ₫", productdiscount: "-17.06%" },
    { id: 19, image: "./assets/img/product19.webp", productname: "PC Dell Vostro 3888 MT RJMM6D3(Intel Core i5-10400/8GB/1TBHDD/Windows 11 Home SL 64-bit + Office 2021 Home & Student/WiFi 802.11ac)", productprice: "13.490.000 ₫", productcost: "13.990.000 ₫", productdiscount: "-3.57%" },
    { id: 20, image: "./assets/img/product20.webp", productname: "Mainboard ASUS PRIME Z690M-PLUS D4", productprice: "5.290.000 ₫", productcost: "5.590.000 ₫", productdiscount: "-5.37%" },
    { id: 21, image: "./assets/img/product1.webp", productname: "Card màn hình GALAX Geforce GTX 1650 EX (1-Click OC) 4GB GDDR6 65SQL8DS66E6", productprice: "6.490.000 ₫", productcost: "6.890.000 ₫", productdiscount: "-5.81%" },
    { id: 22, image: "./assets/img/product2.webp", productname: "Nguồn máy tính SEGOTEP SG-750AE - 650W - 80 Plus", productprice: "999.000 ₫", productcost: "1.199.000 ₫", productdiscount: "-16.68%" },
    { id: 23, image: "./assets/img/product3.webp", productname: "Nguồn máy tính SEGOTEP GP-850G - 750W - 80 Plus Gold - Full Modular", productprice: "2.090.000 ₫", productcost: "2.520.000 ₫", productdiscount: "-17.06%" },
    { id: 24, image: "./assets/img/product4.webp", productname: "PC Dell Vostro 3888 MT RJMM6D3(Intel Core i5-10400/8GB/1TBHDD/Windows 11 Home SL 64-bit + Office 2021 Home & Student/WiFi 802.11ac)", productprice: "13.490.000 ₫", productcost: "13.990.000 ₫", productdiscount: "-3.57%" },
    { id: 25, image: "./assets/img/product5.webp", productname: "Mainboard ASUS PRIME Z690M-PLUS D4", productprice: "5.290.000 ₫", productcost: "5.590.000 ₫", productdiscount: "-5.37%" },
    { id: 26, image: "./assets/img/product6.webp", productname: "Tản Nhiệt Khí Cpu Idcooling Se-224-Xt Argb V3", productprice: "679.000 ₫", productcost: "759.000 ₫", productdiscount: "-10.54%" },
    { id: 27, image: "./assets/img/product7.webp", productname: "RAM desktop KINGSTON Fury Beast 16GB (1 x 16GB) DDR4 3200MHz (KF432C16BB/16)", productprice: "1.990.000 ₫", productcost: "2.690.000 ₫", productdiscount: "-26.02%" },
    { id: 28, image: "./assets/img/product8.webp", productname: "Laptop MSI GF63 Thin 11SC 662VN ( 15.6' Full HD/ 144Hz/Intel Core i7-11800H/8GB/512GB SSD/NVIDIA GeForce GTX 1650/Windows 11 Home/1.9kg)", productprice: "22.490.000 ₫", productcost: "23.990.000 ₫", productdiscount: "-6.25%" },
    { id: 29, image: "./assets/img/product9.webp", productname: "Thiết bị quan sát/ Camera EZVIZ C3W (4MP)", productprice: "1.550.000 ₫", productcost: "1.550.000 ₫", productdiscount: "0.0%" },
    { id: 30, image: "./assets/img/product10.webp", productname: "Điện thoại Xiaomi Redmi 10C (4GB/128GB) (Blue)", productprice: "3.690.000 ₫", productcost: "4.490.000 ₫", productdiscount: "-17.82%" },
    { id: 31, image: "./assets/img/product11.webp", productname: "Laptop ASUS TUF Gaming FX506HC-HN144W 90NR0724-M00FJ0 ( 15.6' Full HD/ 144Hz/Intel Core i5-11400H/8GB/512GB SSD/NVIDIA GeForce RTX 3050/Windows 11 Home/2.3kg)", productprice: "20.990.000 ₫", productcost: "23.990.000 ₫", productdiscount: "-12.51%" },
    { id: 32, image: "./assets/img/product12.webp", productname: "Thiết bị định tuyến mạng không dây Asus Wifi 6 GT-AX6000", productprice: "12.449.000 ₫", productcost: "13.790.000 ₫", productdiscount: "-9.72%" },
    { id: 33, image: "./assets/img/product13.webp", productname: "Điện Thoại Di Động iPhone 13 Pro Max 256GB Alpine Green (MND03VN/A) (Alpine Green)", productprice: "33.990.000 ₫", productcost: "37.990.000 ₫", productdiscount: "-10.53%" },
    { id: 34, image: "./assets/img/product14.webp", productname: "PC HP ProDesk 400 G7 MT 60U83PA(Intel Core i3-10105/8GB/256GBSSD/Windows 11 Home SL 64-bit/WiFi 802.11ac)", productprice: "10.669.000 ₫", productcost: "10.990.000 ₫", productdiscount: "-2.92%" },
    { id: 35, image: "./assets/img/product15.webp", productname: "Laptop HP Victus 16-d0294TX 5Z9R5PA ( 16.1' Full HD/ 144Hz/Intel Core i5-11400H/8GB/512GB SSD/NVIDIA GeForce RTX 3050Ti/Windows 11 Home SL/2.4kg)", productprice: "24.990.000 ₫", productcost: "28.990.000 ₫", productdiscount: "-13.8%" },
    { id: 36, image: "./assets/img/product16.webp", productname: "Card màn hình GALAX Geforce GTX 1650 EX (1-Click OC) 4GB GDDR6 65SQL8DS66E6", productprice: "6.490.000 ₫", productcost: "6.890.000 ₫", productdiscount: "-5.81%" },
    { id: 37, image: "./assets/img/product17.webp", productname: "Nguồn máy tính SEGOTEP SG-750AE - 650W - 80 Plus", productprice: "999.000 ₫", productcost: "1.199.000 ₫", productdiscount: "-16.68%" },
    { id: 38, image: "./assets/img/product18.webp", productname: "Nguồn máy tính SEGOTEP GP-850G - 750W - 80 Plus Gold - Full Modular", productprice: "2.090.000 ₫", productcost: "2.520.000 ₫", productdiscount: "-17.06%" },
    { id: 39, image: "./assets/img/product19.webp", productname: "PC Dell Vostro 3888 MT RJMM6D3(Intel Core i5-10400/8GB/1TBHDD/Windows 11 Home SL 64-bit + Office 2021 Home & Student/WiFi 802.11ac)", productprice: "13.490.000 ₫", productcost: "13.990.000 ₫", productdiscount: "-3.57%" },
    { id: 40, image: "./assets/img/product20.webp", productname: "Mainboard ASUS PRIME Z690M-PLUS D4", productprice: "5.290.000 ₫", productcost: "5.590.000 ₫", productdiscount: "-5.37%" },
    { id: 41, image: "./assets/img/product16.webp", productname: "Card màn hình GALAX Geforce GTX 1650 EX (1-Click OC) 4GB GDDR6 65SQL8DS66E6", productprice: "6.490.000 ₫", productcost: "6.890.000 ₫", productdiscount: "-5.81%" },
    { id: 42, image: "./assets/img/product17.webp", productname: "Nguồn máy tính SEGOTEP SG-750AE - 650W - 80 Plus", productprice: "999.000 ₫", productcost: "1.199.000 ₫", productdiscount: "-16.68%" },
    { id: 43, image: "./assets/img/product18.webp", productname: "Nguồn máy tính SEGOTEP GP-850G - 750W - 80 Plus Gold - Full Modular", productprice: "2.090.000 ₫", productcost: "2.520.000 ₫", productdiscount: "-17.06%" },
    { id: 44, image: "./assets/img/product19.webp", productname: "PC Dell Vostro 3888 MT RJMM6D3(Intel Core i5-10400/8GB/1TBHDD/Windows 11 Home SL 64-bit + Office 2021 Home & Student/WiFi 802.11ac)", productprice: "13.490.000 ₫", productcost: "13.990.000 ₫", productdiscount: "-3.57%" },
    { id: 45, image: "./assets/img/product20.webp", productname: "Mainboard ASUS PRIME Z690M-PLUS D4", productprice: "5.290.000 ₫", productcost: "5.590.000 ₫", productdiscount: "-5.37%" },
    { id: 46, image: "./assets/img/product10.webp", productname: "Điện thoại Xiaomi Redmi 10C (4GB/128GB) (Blue)", productprice: "3.690.000 ₫", productcost: "4.490.000 ₫", productdiscount: "-17.82%" },
    { id: 47, image: "./assets/img/product11.webp", productname: "Laptop ASUS TUF Gaming FX506HC-HN144W 90NR0724-M00FJ0 ( 15.6' Full HD/ 144Hz/Intel Core i5-11400H/8GB/512GB SSD/NVIDIA GeForce RTX 3050/Windows 11 Home/2.3kg)", productprice: "20.990.000 ₫", productcost: "23.990.000 ₫", productdiscount: "-12.51%" },
    { id: 48, image: "./assets/img/product12.webp", productname: "Thiết bị định tuyến mạng không dây Asus Wifi 6 GT-AX6000", productprice: "12.449.000 ₫", productcost: "13.790.000 ₫", productdiscount: "-9.72%" },
    { id: 49, image: "./assets/img/product13.webp", productname: "Điện Thoại Di Động iPhone 13 Pro Max 256GB Alpine Green (MND03VN/A) (Alpine Green)", productprice: "33.990.000 ₫", productcost: "37.990.000 ₫", productdiscount: "-10.53%" },
    { id: 50, image: "./assets/img/product14.webp", productname: "PC HP ProDesk 400 G7 MT 60U83PA(Intel Core i3-10105/8GB/256GBSSD/Windows 11 Home SL 64-bit/WiFi 802.11ac)", productprice: "10.669.000 ₫", productcost: "10.990.000 ₫", productdiscount: "-2.92%" },
    { id: 51, image: "./assets/img/product15.webp", productname: "Laptop HP Victus 16-d0294TX 5Z9R5PA ( 16.1' Full HD/ 144Hz/Intel Core i5-11400H/8GB/512GB SSD/NVIDIA GeForce RTX 3050Ti/Windows 11 Home SL/2.4kg)", productprice: "24.990.000 ₫", productcost: "28.990.000 ₫", productdiscount: "-13.8%" },
    { id: 52, image: "./assets/img/product16.webp", productname: "Card màn hình GALAX Geforce GTX 1650 EX (1-Click OC) 4GB GDDR6 65SQL8DS66E6", productprice: "6.490.000 ₫", productcost: "6.890.000 ₫", productdiscount: "-5.81%" },
    { id: 53, image: "./assets/img/product17.webp", productname: "Nguồn máy tính SEGOTEP SG-750AE - 650W - 80 Plus", productprice: "999.000 ₫", productcost: "1.199.000 ₫", productdiscount: "-16.68%" },
    { id: 54, image: "./assets/img/product18.webp", productname: "Nguồn máy tính SEGOTEP GP-850G - 750W - 80 Plus Gold - Full Modular", productprice: "2.090.000 ₫", productcost: "2.520.000 ₫", productdiscount: "-17.06%" },
    { id: 55, image: "./assets/img/product19.webp", productname: "PC Dell Vostro 3888 MT RJMM6D3(Intel Core i5-10400/8GB/1TBHDD/Windows 11 Home SL 64-bit + Office 2021 Home & Student/WiFi 802.11ac)", productprice: "13.490.000 ₫", productcost: "13.990.000 ₫", productdiscount: "-3.57%" },
    { id: 56, image: "./assets/img/product20.webp", productname: "Mainboard ASUS PRIME Z690M-PLUS D4", productprice: "5.290.000 ₫", productcost: "5.590.000 ₫", productdiscount: "-5.37%" },
    { id: 57, image: "./assets/img/product16.webp", productname: "Card màn hình GALAX Geforce GTX 1650 EX (1-Click OC) 4GB GDDR6 65SQL8DS66E6", productprice: "6.490.000 ₫", productcost: "6.890.000 ₫", productdiscount: "-5.81%" },
    { id: 58, image: "./assets/img/product17.webp", productname: "Nguồn máy tính SEGOTEP SG-750AE - 650W - 80 Plus", productprice: "999.000 ₫", productcost: "1.199.000 ₫", productdiscount: "-16.68%" },
    { id: 59, image: "./assets/img/product18.webp", productname: "Nguồn máy tính SEGOTEP GP-850G - 750W - 80 Plus Gold - Full Modular", productprice: "2.090.000 ₫", productcost: "2.520.000 ₫", productdiscount: "-17.06%" },
    { id: 60, image: "./assets/img/product19.webp", productname: "PC Dell Vostro 3888 MT RJMM6D3(Intel Core i5-10400/8GB/1TBHDD/Windows 11 Home SL 64-bit + Office 2021 Home & Student/WiFi 802.11ac)", productprice: "13.490.000 ₫", productcost: "13.990.000 ₫", productdiscount: "-3.57%" },

]

let perPage = 15;
let currentPage = 1;
let start = 0;
let end = perPage;



const totalPage = Math.ceil(product.length / perPage);

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

function getCurrentPage(currentPage) {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
    console.log(start, end);
}

function renderProduct() {
    html = '';

    const content = product.map((item, index) => {
        if(index >= start && index < end) {
            html += '<div class="product">';
        html += '<div class="img-product">';
        html += '<img src='+ item.image +'>';
        html += '</div>';
        html += '<div class="product-name">' + item.productname;
        html += '</div>';
        html += '<div class="product-price">'+ item.productprice +'</div>';
        html += '<div class="product-cost-discount">';
        html += '<div class="product-cost">'+ item.productcost +'</div>';
        html += '<div class="product-discount">'+ item.productdiscount +'</div>';
        html += '</div>';
        html += '</div>';
        // console.log(html);
        return html;
        }
    })

    document.getElementById('product').innerHTML = html;
}

renderProduct()
renderListPage()

function renderListPage() {
    let html = '';
    html += `<li class="active"><a>${1}</a></li>`;
    for (let i = 2; i <= totalPage; i++) {
        html += `<li><a>${i}</a></li>`;
    }
    document.getElementById('number-page').innerHTML = html;
}

function changePage() {
    const currentPages = document.querySelectorAll('.number-page li');
    console.log(currentPage);
    for (let i=0 ; i < currentPages.length ; i++ ) {
        currentPages[i].addEventListener('click', ()=> {
            let value = i + 1;
            console.log(value);
            currentPage = value;
            getCurrentPage(currentPage);
            renderProduct();
        })
    }
}
changePage();

btnNext.addEventListener('click', ()=> {
    currentPage++;
    if (currentPage > totalPage) {
        currentPage = totalPage;
    }
    if (currentPage === totalPage) {
        $('.btn-next').addClass('btn-active');
    }
    $('.btn-prev').removeClass('btn-active');
    console.log(start, end);
    getCurrentPage(currentPage);
    
    renderProduct();
})

btnPrev.addEventListener('click', ()=> {
    currentPage--;
    if (currentPage <= 1) {
        currentPage = 1;
    }
    if (currentPage === 1) {
        $('.btn-prev').addClass('btn-active');
    }
    $('.btn-next').removeClass('btn-active');
    console.log(start, end);
    getCurrentPage(currentPage);
    
    renderProduct();
})