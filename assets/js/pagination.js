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
    { id: 16, image: "./assets/img/product16.webp", productname: "Laptop ASUS Vivobook Pro M7600QC-L2077W 90NB0V81-M001B0 ( 16 Ultra HD (4K)/AMD Ryzen 5 5600H/16GB/512GB SSD/NVIDIA GeForce RTX 3050/Windows 11 Home/2kg)", productprice: "32.490.000 ₫", productcost: "32.990.000 ₫", productdiscount: "-1.52%" },
    { id: 17, image: "./assets/img/product17.webp", productname: "Điện thoại ASUS ROG Phone 5S 8GB/128GB ZS676KS-1A111WW (Snapdragon 888+) (Đen) (Black)", productprice: "16.990.000 ₫", productcost: "16.990.000 ₫", productdiscount: "-0.00%" } ,
    { id: 18, image: "./assets/img/product18.webp", productname: "Màn hình LCD PHILIPS 191S8LHSB2 (1366 x 768/TN/60Hz/5 ms)", productprice: "2.619.000 ₫", productcost: "2.619.000 ₫", productdiscount: "-0.00%" },
    { id: 19, image: "./assets/img/product19.webp", productname: "Laptop ASUS ROG Flow Z13 GZ301ZC-LD110W ( 13.4' WUXGA/ 120Hz/Intel Core i7-12700H/16GB/512GB SSD/NVIDIA GeForce RTX 3050/Windows 11 Home/1.1kg)", productprice: "49.490.000 ₫", productcost: "49.990.000 ₫", productdiscount: "-1.00%" },
    { id: 20, image: "./assets/img/product20.webp", productname: "Card màn hình ASUS Dual RTX 3050 OC 8GB 8GB GDDR6", productprice: "10.290.000 ₫", productcost: "13.319.000 ₫", productdiscount: "-22.74%" },
    { id: 21, image: "./assets/img/product21.webp", productname: "Laptop ASUS ROG Strix G G513RC-HN038W ( 15.6' Full HD/ 144Hz/AMD Ryzen 7 6800H/8GB/512GB SSD/NVIDIA GeForce RTX 3050/Windows 11 Home/2.1kg)", productprice: "29.490.000 ₫", productcost: "31.490.000 ₫", productdiscount: "-6.35%" },
    { id: 22, image: "./assets/img/product22.webp", productname: "Card màn hình ASUS Rog Strix Geforce RTX 3080 10GB GDDR6X", productprice: "44.090.000 ₫", productcost: "44.090.000 ₫", productdiscount: "-0.00%" },
    { id: 23, image: "./assets/img/product23.webp", productname: "Laptop ASUS ROG Flow GV301QC-K6029T 90NR04G5-M00510 ( 13.4' WUXGA/ 120Hz/AMD Ryzen 9 5980HS/32GB/1TB SSD/NVIDIA GeForce RTX 3050/Windows 10 Home 64-bit/1.3kg)", productprice: "76.990.000 ₫", productcost: "79.990.000 ₫", productdiscount: "" },
    { id: 24, image: "./assets/img/product24.webp", productname: "Laptop ASUS ROG Zephyrus GX703HS-K4016T 90NR06F1-M00290 ( 17.3' WQHD/ 165Hz/Intel Core i9-11900H/32GB/2TB SSD/NVIDIA GeForce RTX 3080/Windows 10 Home 64-bit/2.6kg)", productprice: "98.990.000 ₫", productcost: "99.990.000 ₫", productdiscount: "" },
    { id: 25, image: "./assets/img/product25.webp", productname: "Card màn hình ASUS ROG Strix LC GeForce RTX 3080 Ti OC Edition 12GB GDDR6X 12GB GDDR6X", productprice: "58.990.000 ₫", productcost: "58.990.000 ₫", productdiscount: "-0.00%" },
    { id: 26, image: "./assets/img/product26.webp", productname: "CPU AMD Ryzen 9 5950X (16C/32T, 3.40 GHz - 4.90 GHz, 64MB) - AM4", productprice: "20.669.000 ₫", productcost: "21.300.000 ₫", productdiscount: "" },
    { id: 27, image: "./assets/img/product27.webp", productname: "CPU AMD Ryzen Threadripper 1920X (12C/24T, 3.5 GHz - 4.0 GHz, 39MB) - TR4", productprice: "22.200.000 ₫", productcost: "22.200.000 ₫", productdiscount: "-0.00%" },
    { id: 28, image: "./assets/img/product28.webp", productname: "Ổ cứng SSD Western Digital Blue 500GB 2.5' SATA 3 - WDS500G2B0A", productprice: "1.799.000 ₫", productcost: "1.930.000 ₫", productdiscount: "" },
    { id: 29, image: "./assets/img/product29.webp", productname: "Thùng máy/ Case Xigmatek LUX E 3FX (3 FAN X22ARGB) - EN47802", productprice: "1.190.000 ₫", productcost: "1.190.000 ₫", productdiscount: "-0.00%" },
    { id: 30, image: "./assets/img/product30.webp", productname: "Thùng máy/ Case Xigmatek LUX E ARTIC 3FX (3 FAN X22ARGB) - EN47819", productprice: "1.290.000 ₫", productcost: "1.290.000 ₫", productdiscount: "-0.00%" },
    { id: 31, image: "./assets/img/product31.webp", productname: "Thùng máy/ Case CM MasterBox TD500 Mesh ARGB", productprice: "2.390.000 ₫", productcost: "2.390.000 ₫", productdiscount: "-0.00%" },
    { id: 32, image: "./assets/img/product32.webp", productname: "Tản nhiệt nước AIO ASUS ROG STRIX LC 360 RGB (Trắng)", productprice: "7.490.000 ₫", productcost: "7.490.000 ₫", productdiscount: "-0.00%" },
    { id: 33, image: "./assets/img/product33.webp", productname: "Tản nhiệt nước AIO ASUS TUF LC 240 ARGB (Đen)", productprice: "3.990.000 ₫", productcost: "3.990.000 ₫", productdiscount: "-0.00%" },
    { id: 34, image: "./assets/img/product34.webp", productname: "Quạt CPU Gigabyte Aorus ATC800", productprice: "2.390.000 ₫", productcost: "2.390.000 ₫", productdiscount: "-0.00%" },
    { id: 35, image: "./assets/img/product35.webp", productname: "Mainboard ASUS ROG STRIX B550 XE GAMING WIFI", productprice: "8.050.000 ₫", productcost: "8.050.000 ₫", productdiscount: "-0.00%" },
    { id: 36, image: "./assets/img/product36.webp", productname: "Mainboard ASUS TUF GAMING B660M-PLUS D4", productprice: "4.890.000 ₫", productcost: "4.890.000 ₫", productdiscount: "-0.00%" },
    { id: 37, image: "./assets/img/product37.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 38, image: "./assets/img/product38.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 39, image: "./assets/img/product39.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 40, image: "./assets/img/product40.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 41, image: "./assets/img/product41.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 42, image: "./assets/img/product42.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 43, image: "./assets/img/product43.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 44, image: "./assets/img/product44.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 45, image: "./assets/img/product45.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 46, image: "./assets/img/product46.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 47, image: "./assets/img/product47.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 48, image: "./assets/img/product48.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 49, image: "./assets/img/product49.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 50, image: "./assets/img/product50.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 51, image: "./assets/img/product51.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 52, image: "./assets/img/product52.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 53, image: "./assets/img/product53.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 54, image: "./assets/img/product54.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 55, image: "./assets/img/product55.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 56, image: "./assets/img/product56.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 57, image: "./assets/img/product57.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 58, image: "./assets/img/product58.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 59, image: "./assets/img/product59.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 60, image: "./assets/img/product60.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 61, image: "./assets/img/product61.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 62, image: "./assets/img/product62.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 63, image: "./assets/img/product63.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 64, image: "./assets/img/product64.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 65, image: "./assets/img/product65.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 66, image: "./assets/img/product66.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 67, image: "./assets/img/product67.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 68, image: "./assets/img/product68.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 69, image: "./assets/img/product69.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 70, image: "./assets/img/product70.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 71, image: "./assets/img/product71.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 72, image: "./assets/img/product72.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 73, image: "./assets/img/product73.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 74, image: "./assets/img/product74.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
    { id: 75, image: "./assets/img/product75.webp", productname: "", productprice: "", productcost: "", productdiscount: "" },
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
    console.log(currentPages);
    for (let i=0 ; i < currentPages.length ; i++ ) {
        currentPages[i].addEventListener('click', ()=> {
            let value = i + 1;
            console.log(value);
            currentPage = value;
            $('.number-page li').removeClass('active');
            currentPages[i].classList.add('active');
            if(currentPage > 1 && currentPage < totalPage) {
                $('.btn-prev').removeClass('btn-active');
                $('.btn-next').removeClass('btn-active');
            }
            if (currentPage === 1) {
                $('.btn-prev').addClass('btn-active');
            }
            if (currentPage === totalPage) {
                $('.btn-next').addClass('btn-active');
            }
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
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${currentPage-1})`).addClass('active');
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
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${currentPage-1})`).addClass('active');
    console.log(start, end);
    getCurrentPage(currentPage);
    
    renderProduct();
})