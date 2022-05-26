
const product = [
    { id: 1, image: "./assets/img/product1.webp", src: "./product1.html", productname: "ASUS ROG Phone 5S 8GB/128GB ZS676KS-1A111WW (Snapdragon 888+) (Đen) (Black)", productprice: "15.880.000 ₫", productcost: "16.990.000 ₫", productdiscount: "-6.53%" } ,
    { id: 2, image: "./assets/img/product2.webp", src: "./product32.html", productname: "Tản nhiệt nước AIO ASUS ROG STRIX LC 360 RGB (Trắng)", productprice: "7.490.000 ₫", productcost: "", productdiscount: "" },
    { id: 3, image: "./assets/img/product3.webp", src: "./product33.html", productname: "Tản nhiệt nước AIO ASUS TUF LC 240 ARGB (Đen)", productprice: "3.990.000 ₫", productcost: "", productdiscount: "" },
    { id: 4, image: "./assets/img/product4.webp", src: "./product34.html", productname: "Quạt CPU Gigabyte Aorus ATC800", productprice: "2.390.000 ₫", productcost: "", productdiscount: "" },
    { id: 5, image: "./assets/img/product5.webp", src: "./product35.html", productname: "Mainboard ASUS ROG STRIX B550 XE GAMING WIFI", productprice: "8.050.000 ₫", productcost: "", productdiscount: "" },
    { id: 6, image: "./assets/img/product6.webp", src: "./product36.html", productname: "Mainboard ASUS TUF GAMING B660M-PLUS D4", productprice: "4.890.000 ₫", productcost: "", productdiscount: "" },
    { id: 7, image: "./assets/img/product7.webp", src: "./product37.html", productname: "Mainboard ASUS ROG STRIX Z690-F GAMING WIFI", productprice: "9.690.000 ₫", productcost: "10.740.000 ₫", productdiscount: "-9.78%" },
    { id: 8, image: "./assets/img/product8.webp", src: "./product38.html", productname: "Mainboard ASUS Z490 ROG MAXIMUS XII EXTREME", productprice: "21.120.000 ₫", productcost: "", productdiscount: "" },
    { id: 9, image: "./assets/img/product9.webp", src: "./product39.html", productname: "Nguồn máy tính Cooler Master MWE gold V2 FM 850W - 850W - 80 Plus Gold - Full Modular (MPE-8501-AFAAG)", productprice: "3.150.000 ₫", productcost: "", productdiscount: "" },
    { id: 10, image: "./assets/img/product10.webp", src: "./product40.html", productname: "Nguồn máy tính CORSAIR AX1600i - 1600W - 80 Plus Titanium - Full Modular (CP-9020087-NA)", productprice: "12.700.000 ₫", productcost: "", productdiscount: "" },
    { id: 11, image: "./assets/img/product11.webp", src: "./product41.html", productname: "Laptop APPLE MacBook Pro 2021 16' MK1E3SA/A ( 16' Apple M1 Pro/16GB/512GB SSD/macOS/2.1kg)", productprice: "65.990.000 ₫", productcost: "", productdiscount: "" },
    { id: 12, image: "./assets/img/product12.webp", src: "./product42.html", productname: "Laptop APPLE MacBook Pro 2020 MYDC2SA/A ( 13.3' Apple M1/8GB/512GB SSD/macOS/1.4kg)", productprice: "38.490.000 ₫", productcost: "39.990.000 ₫", productdiscount: "-3.75%" },
    { id: 13, image: "./assets/img/product13.webp", src: "./product43.html", productname: "Điện Thoại Di Động Samsung Galaxy Note 20 (Đồng) SM-N980FZNGXXV", productprice: "23.990.000 ₫", productcost: "", productdiscount: "" },
    { id: 14, image: "./assets/img/product14.webp", src: "./product44.html", productname: "Màn hình LCD ASUS VP228HE-J (1920 x 1080/TN/75Hz/1 ms)", productprice: "3.730.000 ₫", productcost: "4.020.000 ₫", productdiscount: "-7.21%" },
    { id: 15, image: "./assets/img/product15.webp", src: "./product45.html", productname: "Màn hình LCD ASUS ProArt PA278QV (2560 x 1440/IPS/75Hz/5 ms)", productprice: "9.190.000 ₫", productcost: "9.590.000 ₫", productdiscount: "-4.17%" },
    { id: 16, image: "./assets/img/product16.webp", src: "./product16.html", productname: "Laptop ASUS Vivobook Pro M7600QC-L2077W 90NB0V81-M001B0 ( 16 Ultra HD (4K)/AMD Ryzen 5 5600H/16GB/512GB SSD/NVIDIA GeForce RTX 3050/Windows 11 Home/2kg)", productprice: "32.490.000 ₫", productcost: "32.990.000 ₫", productdiscount: "-1.52%" },
    { id: 17, image: "./assets/img/product17.webp", src: "./product17.html", productname: "Card màn hình GALAX Geforce GTX 1650 EX (1-Click OC) 4GB GDDR6 65SQL8DS66E6", productprice: "6.490.000 ₫", productcost: "6.890.000 ₫", productdiscount: "-5.81%" },
    { id: 18, image: "./assets/img/product18.webp", src: "./product18.html", productname: "Màn hình LCD PHILIPS 191S8LHSB2 (1366 x 768/TN/60Hz/5 ms)", productprice: "2.619.000 ₫", productcost: "", productdiscount: "" },
    { id: 19, image: "./assets/img/product19.webp", src: "./product19.html", productname: "Laptop ASUS ROG Flow Z13 GZ301ZC-LD110W ( 13.4' WUXGA/ 120Hz/Intel Core i7-12700H/16GB/512GB SSD/NVIDIA GeForce RTX 3050/Windows 11 Home/1.1kg)", productprice: "49.490.000 ₫", productcost: "49.990.000 ₫", productdiscount: "-1.00%" },
    { id: 20, image: "./assets/img/product20.webp", src: "./product20.html", productname: "Card màn hình ASUS Dual RTX 3050 OC 8GB 8GB GDDR6", productprice: "10.290.000 ₫", productcost: "13.319.000 ₫", productdiscount: "-22.74%" },
    { id: 21, image: "./assets/img/product21.webp", src: "./product21.html", productname: "Laptop ASUS ROG Strix G G513RC-HN038W ( 15.6' Full HD/ 144Hz/AMD Ryzen 7 6800H/8GB/512GB SSD/NVIDIA GeForce RTX 3050/Windows 11 Home/2.1kg)", productprice: "29.490.000 ₫", productcost: "31.490.000 ₫", productdiscount: "-6.35%" },
    { id: 22, image: "./assets/img/product22.webp", src: "./product22.html", productname: "Card màn hình ASUS Rog Strix Geforce RTX 3080 10GB GDDR6X", productprice: "44.090.000 ₫", productcost: "", productdiscount: "" },
    { id: 23, image: "./assets/img/product23.webp", src: "./product23.html", productname: "Laptop ASUS ROG Flow GV301QC-K6029T 90NR04G5-M00510 ( 13.4' WUXGA/ 120Hz/AMD Ryzen 9 5980HS/32GB/1TB SSD/NVIDIA GeForce RTX 3050/Windows 10 Home 64-bit/1.3kg)", productprice: "76.990.000 ₫", productcost: "79.990.000 ₫", productdiscount: "-3.75%" },
    { id: 24, image: "./assets/img/product24.webp", src: "./product24.html", productname: "Laptop ASUS ROG Zephyrus GX703HS-K4016T 90NR06F1-M00290 ( 17.3' WQHD/ 165Hz/Intel Core i9-11900H/32GB/2TB SSD/NVIDIA GeForce RTX 3080/Windows 10 Home 64-bit/2.6kg)", productprice: "98.990.000 ₫", productcost: "99.990.000 ₫", productdiscount: "-1.00%" },
    { id: 25, image: "./assets/img/product25.webp", src: "./product25.html", productname: "Card màn hình ASUS ROG Strix LC GeForce RTX 3080 Ti OC Edition 12GB GDDR6X 12GB GDDR6X", productprice: "58.990.000 ₫", productcost: "", productdiscount: "" },
    { id: 26, image: "./assets/img/product26.webp", src: "./product26.html", productname: "CPU AMD Ryzen 9 5950X (16C/32T, 3.40 GHz - 4.90 GHz, 64MB) - AM4", productprice: "20.669.000 ₫", productcost: "21.300.000 ₫", productdiscount: "-2.96%" },
    { id: 27, image: "./assets/img/product27.webp", src: "./product27.html", productname: "CPU AMD Ryzen Threadripper 1920X (12C/24T, 3.5 GHz - 4.0 GHz, 39MB) - TR4", productprice: "22.200.000 ₫", productcost: "", productdiscount: "" },
    { id: 28, image: "./assets/img/product28.webp", src: "./product28.html", productname: "Ổ cứng SSD Western Digital Blue 500GB 2.5' SATA 3 - WDS500G2B0A", productprice: "1.799.000 ₫", productcost: "1.930.000 ₫", productdiscount: "-6.79%" },
    { id: 29, image: "./assets/img/product29.webp", src: "./product29.html", productname: "Thùng máy/ Case Xigmatek LUX E 3FX (3 FAN X22ARGB) - EN47802", productprice: "1.190.000 ₫", productcost: "", productdiscount: "" },
    { id: 30, image: "./assets/img/product30.webp", src: "./product30.html", productname: "Thùng máy/ Case Xigmatek LUX E ARTIC 3FX (3 FAN X22ARGB) - EN47819", productprice: "1.290.000 ₫", productcost: "", productdiscount: "" },
    { id: 31, image: "./assets/img/product31.webp", src: "./product31.html", productname: "Thùng máy/ Case CM MasterBox TD500 Mesh ARGB", productprice: "2.390.000 ₫", productcost: "", productdiscount: "" },
    { id: 32, image: "./assets/img/product32.webp", src: "./product2.html", productname: "Nguồn máy tính SEGOTEP SG-750AE - 650W - 80 Plus", productprice: "999.000 ₫", productcost: "1.199.000 ₫", productdiscount: "-16.68%" },
    { id: 33, image: "./assets/img/product33.webp", src: "./product3.html", productname: "Nguồn máy tính SEGOTEP GP-850G - 750W - 80 Plus Gold - Full Modular", productprice: "2.090.000 ₫", productcost: "2.520.000 ₫", productdiscount: "-17.06%" },
    { id: 34, image: "./assets/img/product34.webp", src: "./product4.html", productname: "PC Dell Vostro 3888 MT RJMM6D3(Intel Core i5-10400/8GB/1TBHDD/Windows 11 Home SL 64-bit + Office 2021 Home & Student/WiFi 802.11ac)", productprice: "13.490.000 ₫", productcost: "13.990.000 ₫", productdiscount: "-3.57%" },
    { id: 35, image: "./assets/img/product35.webp", src: "./product5.html", productname: "Mainboard ASUS PRIME Z690M-PLUS D4", productprice: "5.290.000 ₫", productcost: "5.590.000 ₫", productdiscount: "-5.37%" },
    { id: 36, image: "./assets/img/product36.webp", src: "./product6.html", productname: "Tản Nhiệt Khí Cpu Idcooling Se-224-Xt Argb V3", productprice: "679.000 ₫", productcost: "759.000 ₫", productdiscount: "-10.54%" },
    { id: 37, image: "./assets/img/product37.webp", src: "./product7.html", productname: "RAM desktop KINGSTON Fury Beast 16GB (1 x 16GB) DDR4 3200MHz (KF432C16BB/16)", productprice: "1.990.000 ₫", productcost: "2.690.000 ₫", productdiscount: "-26.02%" },
    { id: 38, image: "./assets/img/product38.webp", src: "./product8.html", productname: "Laptop MSI GF63 Thin 11SC 662VN ( 15.6' Full HD/ 144Hz/Intel Core i7-11800H/8GB/512GB SSD/NVIDIA GeForce GTX 1650/Windows 11 Home/1.9kg)", productprice: "22.490.000 ₫", productcost: "23.990.000 ₫", productdiscount: "-6.25%" },
    { id: 39, image: "./assets/img/product39.webp", src: "./product9.html", productname: "Thiết bị quan sát/ Camera EZVIZ C3W (4MP)", productprice: "1.550.000 ₫", productcost: "", productdiscount: "" },
    { id: 40, image: "./assets/img/product40.webp", src: "./product10.html", productname: "Điện thoại Xiaomi Redmi 10C (4GB/128GB) (Blue)", productprice: "3.690.000 ₫", productcost: "4.490.000 ₫", productdiscount: "-17.82%" },
    { id: 41, image: "./assets/img/product41.webp", src: "./product11.html", productname: "Laptop ASUS TUF Gaming FX506HC-HN144W 90NR0724-M00FJ0 ( 15.6' Full HD/ 144Hz/Intel Core i5-11400H/8GB/512GB SSD/NVIDIA GeForce RTX 3050/Windows 11 Home/2.3kg)", productprice: "20.990.000 ₫", productcost: "23.990.000 ₫", productdiscount: "-12.51%" },
    { id: 42, image: "./assets/img/product42.webp", src: "./product12.html", productname: "Thiết bị định tuyến mạng không dây Asus Wifi 6 GT-AX6000", productprice: "12.449.000 ₫", productcost: "13.790.000 ₫", productdiscount: "-9.72%" },
    { id: 43, image: "./assets/img/product43.webp", src: "./product13.html", productname: "Điện Thoại Di Động iPhone 13 Pro Max 256GB Alpine Green (MND03VN/A) (Alpine Green)", productprice: "33.990.000 ₫", productcost: "37.990.000 ₫", productdiscount: "-10.53%" },
    { id: 44, image: "./assets/img/product44.webp", src: "./product14.html", productname: "PC HP ProDesk 400 G7 MT 60U83PA(Intel Core i3-10105/8GB/256GBSSD/Windows 11 Home SL 64-bit/WiFi 802.11ac)", productprice: "10.669.000 ₫", productcost: "10.990.000 ₫", productdiscount: "-2.92%" },
    { id: 45, image: "./assets/img/product45.webp", src: "./product15.html", productname: "Laptop HP Victus 16-d0294TX 5Z9R5PA ( 16.1' Full HD/ 144Hz/Intel Core i5-11400H/8GB/512GB SSD/NVIDIA GeForce RTX 3050Ti/Windows 11 Home SL/2.4kg)", productprice: "24.990.000 ₫", productcost: "28.990.000 ₫", productdiscount: "-13.8%" },
    { id: 46, image: "./assets/img/product46.webp", src: "./product46.html", productname: "Chuột gaming Logitech G102 Gen2 Lightsync (Trắng)", productprice: "399.000 ₫", productcost: "589.000 ₫", productdiscount: "-32.26%" },
    { id: 47, image: "./assets/img/product47.webp", src: "./product47.html", productname: "Chuột gaming không dây Logitech G903 Hero", productprice: "2.989.000 ₫", productcost: "3.790.000 ₫", productdiscount: "-21.13%" },
    { id: 48, image: "./assets/img/product48.webp", src: "./product48.html", productname: "Ghế Corsair T3 Rush Gray-White", productprice: "6.000.000 ₫", productcost: "", productdiscount: "" },
    { id: 49, image: "./assets/img/product49.webp", src: "./product49.html", productname: "Ghế E-Dra Ultimate EGC2020 LUX (Đen)", productprice: "5.499.000 ₫", productcost: "6.190.000 ₫", productdiscount: "-11.16%" },
    { id: 50, image: "./assets/img/product50.webp", src: "./product50.html", productname: "Bàn phím giả cơ Logitech Gaming G213 (Đen)", productprice: "990.000 ₫", productcost: "", productdiscount: "" },
    { id: 51, image: "./assets/img/product51.webp", src: "./product51.html", productname: "Bàn phím cơ Logitech G613 không dây (Full size/Romer-G)", productprice: "1.890.000 ₫", productcost: "", productdiscount: "" },
    { id: 52, image: "./assets/img/product52.webp", src: "./product52.html", productname: "Loa 5.1 Logitech Z906 (Đen)", productprice: "7.299.000 ₫", productcost: "", productdiscount: "" },
    { id: 53, image: "./assets/img/product53.webp", src: "./product53.html", productname: "Vô lăng Logitech Driving Force G29", productprice: "7.289.000 ₫", productcost: "7.999.000 ₫", productdiscount: "-8.88%" },
    { id: 54, image: "./assets/img/product54.webp", src: "./product54.html", productname: "Mainboard ASROCK B660M Steel Legend", productprice: "4.499.000 ₫", productcost: "", productdiscount: "" },
    { id: 55, image: "./assets/img/product55.webp", src: "./product55.html", productname: "Máy in phun màu Epson L1250", productprice: "4.270.000 ₫", productcost: "", productdiscount: "" },
    { id: 56, image: "./assets/img/product56.webp", src: "./product56.html", productname: "Nguồn máy tính XIGMATEK X-Power III 350 - 250W - 80 Plus", productprice: "359.000 ₫", productcost: "559.000 ₫", productdiscount: "-35.78%" },
    { id: 57, image: "./assets/img/product57.webp", src: "./product57.html", productname: "Bàn phím cơ không dây Akko PC75B Plus Year of Tiger (Akko CS Switch - Silver/Lubed)", productprice: "2.799.000 ₫", productcost: "", productdiscount: "" },
    { id: 58, image: "./assets/img/product58.webp", src: "./product58.html", productname: "Laptop ACER Predator Helios 300 PH315-55-76KG NH.QGPSV.001 ( 15.6' Quad HD (2K)/ 165Hz/Intel Core i7-12700H/16GB/512GB SSD/NVIDIA GeForce RTX 3060/Windows 11 Home SL/2.4kg)", productprice: "42.490.000 ₫", productcost: "46.990.000 ₫", productdiscount: "-9.58%" },
    { id: 59, image: "./assets/img/product59.webp", src: "./product59.html", productname: "Laptop HP OMEN 16-b0176TX 5Z9Q7PA ( 16.1' 144Hz/Intel Core i7-11800H/16GB/1TB SSD/NVIDIA GeForce RTX 3060/Windows 11 Home/2.3kg)", productprice: "46.490.000 ₫", productcost: "49.990.000 ₫", productdiscount: "-7.00%" },
    { id: 60, image: "./assets/img/product60.webp", src: "./product60.html", productname: "Tai nghe Over-ear Corsair HS35 Stereo Carbon CA-9011195-AP (Đen)", productprice: "849.000 ₫", productcost: "980.000 ₫", productdiscount: "-13.37%" },
    // { id: 61, image: "./assets/img/product61.webp", src: "./product61.html", productname: "Tai nghe không dây Corsair HS70 PRO WIRELESS Carbon (CA-9011211-AP)", productprice: "1.999.000 ₫", productcost: "2.850.000 ₫", productdiscount: "-29.86%" },
    // { id: 62, image: "./assets/img/product62.webp", src: "./product62.html", productname: "Bộ lưu điện/ UPS APC BVX1200LI-MS 1200VA, 230V, AVR, Universal Sockets", productprice: "2.290.000 ₫", productcost: "2.490.000 ₫", productdiscount: "-8.03%" },
    // { id: 63, image: "./assets/img/product63.webp", src: "./product63.html", productname: "Tai Nghe Bluetooth JBL Reflect Flow (Black)", productprice: "2.499.000 ₫", productcost: "3.590.000 ₫", productdiscount: "-30.39%" },
    // { id: 64, image: "./assets/img/product64.webp", src: "./product64.html", productname: "Tai Nghe Bluetooth JBL Live LIVE300TWSBLK (Đen)", productprice: "3.990.000 ₫", productcost: "", productdiscount: "" },
    // { id: 65, image: "./assets/img/product65.webp", src: "./product65.html", productname: "Tai nghe In-ear JBL Focus 100", productprice: "490.000 ₫", productcost: "", productdiscount: "" },
    // { id: 66, image: "./assets/img/product66.webp", src: "./product66.html", productname: "Tai nghe Bluetooth Apple Airpod Pro (MWP22VN/A)", productprice: "5.290.000 ₫", productcost: "7.390.000 ₫", productdiscount: "-28.42%" },
    // { id: 67, image: "./assets/img/product67.webp", src: "./product67.html", productname: "Tai Nghe Bluetooth Sony WF-SP800N/BME (Đen)", productprice: "4.790.000 ₫", productcost: "", productdiscount: "" },
    // { id: 68, image: "./assets/img/product68.webp", src: "./product68.html", productname: "Tai Nghe Bluettooth LG HBS-FN4 (Trắng)", productprice: "2.099.000 ₫", productcost: "2.790.000 ₫", productdiscount: "-24.77%" },
    // { id: 69, image: "./assets/img/product69.webp", src: "./product69.html", productname: "Loa bluetooth Harman Kardon Omni 10+ (Đen)", productprice: "4.399.000 ₫", productcost: "6.900.000 ₫", productdiscount: "-36.25%" },
    // { id: 70, image: "./assets/img/product70.webp", src: "./product70.html", productname: "Loa bluetooth Bose Soundlink Micro (Đen)", productprice: "3.590.000 ₫", productcost: "", productdiscount: "" },
    // { id: 71, image: "./assets/img/product71.jpg",  src: "./product71.html", productname: "Bộ máy quay kèm phụ kiện GoPro HERO 8 Black Holiday Promo Bundle 2019", productprice: "11.490.000 ₫", productcost: "", productdiscount: "" },
    // { id: 72, image: "./assets/img/product72.webp", src: "./product72.html", productname: "Ống kính Fujifilm XF23mm F1.4 R", productprice: "18.000.000 ₫", productcost: "", productdiscount: "" },
    // { id: 73, image: "./assets/img/product73.webp", src: "./product73.html", productname: "Mực in Canon 303", productprice: "1.408.000 ₫", productcost: "", productdiscount: "" },
    // { id: 74, image: "./assets/img/product74.webp", src: "./product74.html", productname: "Máy quét mã vạch TOPCASH LV908P", productprice: "1.739.000 ₫", productcost: "", productdiscount: "" },
    // { id: 75, image: "./assets/img/product75.webp", src: "./product75.html", productname: "Phần mềm Microsoft Windows 10 Pro 32-bit/64-bit All Lng PK Lic Online DwnLd NR (Key Điện Tử)", productprice: "4.569.000 ₫", productcost: "4.990.000 ₫", productdiscount: "-8.44%" },
    // { id: 76, image: "./assets/img/product76.webp", src: "./product76.html", productname: "Phần mềm Microsoft 365 Personal - 12 tháng - Dành cho 1 người - 5 thiết bị/tài khoản - Word, Excel, PowerPoint - 1TB OneDrive (Key điện tử)", productprice: "1.019.000 ₫", productcost: "1.290.000 ₫", productdiscount: "-21.01%" },
    // { id: 77, image: "./assets/img/product77.webp", src: "./product77.html", productname: "Phần mềm Microsoft 365 Family - 12 tháng - Dành cho 6 người - 5 thiết bị/người - Word, Excel, PowerPoint - 1TB OneDrive (Key điện tử)", productprice: "1.359.000 ₫", productcost: "1.690.000 ₫", productdiscount: "-19.59%" },
    // { id: 78, image: "./assets/img/product78.webp", src: "./product78.html", productname: "Phần mềm Microsoft 365 Business - 12 tháng - Dành cho 1 người - 5 thiết bị/tài khoản - Word, Excel, PowerPoint - 1TB OneDrive for Business - Outlook (Key điện tử)", productprice: "3.179.000 ₫", productcost: "3.490.000 ₫", productdiscount: "-8.91%" },
    // { id: 79, image: "./assets/img/product79.webp", src: "./product79.html", productname: "Phần mềm Office Home & Business 2021 - Dùng vĩnh viễn - Dành cho 1 người, 1 thiết bị - Word, Excel, PowerPoint - Outlook (Key điện tử)", productprice: "5.359.000 ₫", productcost: "5.690.000 ₫", productdiscount: "-5.82%" },
    // { id: 80, image: "./assets/img/product80.webp", src: "./product80.html", productname: "Máy chiếu Epson EB-X06", productprice: "13.370.000 ₫", productcost: "14.295.000 ₫", productdiscount: "-6.47%" },
    // { id: 81, image: "./assets/img/product81.webp", src: "./product81.html", productname: "Router Wifi ASUS BRT-AC828 (Chuẩn Doanh Nghiệp) AC2600 MU-MIMO, 2 cổng WAN VPN, AiProtection, USB 3.0 x 2", productprice: "7.899.000 ₫", productcost: "", productdiscount: "" },
    // { id: 82, image: "./assets/img/product82.webp", src: "./product82.html", productname: "Router Wifi 6 Asus TUF-AX3000", productprice: "4.249.000 ₫", productcost: "4.680.000 ₫", productdiscount: "-9.21%" },
    // { id: 83, image: "./assets/img/product83.webp", src: "./product83.html", productname: "Camera Hikvision DS-2CD2021G1-I", productprice: "1.680.000 ₫", productcost: "", productdiscount: "" },
    // { id: 84, image: "./assets/img/product84.webp", src: "./product84.html", productname: "Thiết bị quan sát/ Camera Kbvision KX-A3112N2", productprice: "1.491.000 ₫", productcost: "", productdiscount: "" },
    // { id: 85, image: "./assets/img/product85.webp", src: "./product85.html", productname: "Khóa Điện Tử YALE YDM3109+ Silver (Xám)", productprice: "9.361.000 ₫", productcost: "", productdiscount: "" },
    // { id: 86, image: "./assets/img/product86.webp", src: "./product86.html", productname: "Ổ cứng HDD WD BLACK P10 Game Drive 5TB 2.5', 3.2 (WDBA3A0050BBK-WESN) (Đen)", productprice: "5.620.000 ₫", productcost: "", productdiscount: "" },
    // { id: 87, image: "./assets/img/product87.webp", src: "./product87.html", productname: "Laptop Asus Vivobook Pro M3401QA-KM025W", productprice: "20.990.000 ₫", productcost: "21.990.000 ₫", productdiscount: "-4.55%" },
    // { id: 88, image: "./assets/img/product88.webp", src: "./product88.html", productname: "Laptop Dell XPS 13 9310 6GH9X ( 13.4' UHD+/Intel Core i7-1195G7/16GB/512GB SSD/Windows 11 Home SL + Office Home & Student 2021/1.3kg)", productprice: "59.990.000 ₫", productcost: "", productdiscount: "" },
    // { id: 89, image: "./assets/img/product89.webp", src: "./product89.html", productname: "Laptop Dell Gaming G15 5511 P105F006BGR ( 15.6' Full HD/ 120Hz/Intel Core i7-11800H/16GB/512GB SSD/NVIDIA GeForce RTX 3050Ti/Windows 11 Home SL/2.8kg)", productprice: "32.990.000 ₫", productcost: "35.990.000 ₫", productdiscount: "8.34%" },
    // { id: 90, image: "./assets/img/product90.webp", src: "./product90.html", productname: "Laptop MSI GP66 Leopard 11UE 643VN ( 15.6' Full HD/ 165Hz/Intel Core i7-11800H/16GB/512GB SSD/NVIDIA GeForce RTX 3060/Windows 10 Home 64-bit/2.4kg)", productprice: "41.990.000 ₫", productcost: "44.990.000 ₫", productdiscount: "-6.67%" },
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
        html += '<a href=' + item.src + ' target="_blank">';
        html += '<img src='+ item.image +'>';
        html += '</a>';
        html += '</div>';
        html += '<div class="product-name">';
        html += '<a href=' + item.src + ' target="_blank">';
        html += item.productname + '</a>';
        html += '</div>';
        html += '<div class="product-price">'+ item.productprice +'</div>';
        html += '<div class="product-cost-discount">';
        html += '<div class="product-cost">'+ item.productcost +'</div>';
        html += '<div class="product-discount">'+ item.productdiscount +'</div>';
        html += '</div>';
        html += '</div>';
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