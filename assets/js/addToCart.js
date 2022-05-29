const btn = document.querySelectorAll(".product__buy button ")
// console.log(btn);

btn.forEach(function (button, index) {
    button.addEventListener('click', function (event) {
        {
            var btnItem = event.target
            var product = btnItem.parentElement.parentElement.parentElement.parentElement
            var productName = product.querySelector(".product__name H4 ").innerText
            var productImg = product.querySelector(".product__row img#img-product-1").src
            var productPrice = product.querySelector(".product__selection-buy .price p span").innerHTML
            addToCart(productName, productImg, productPrice)
        }
    })
})

function addToCart(productName, productImg, productPrice) {
    var addTR = document.createElement("tr")
    var cartItem = document.querySelectorAll(".cart__exist table tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".cart-product-title")
        if (productT[i].innerHTML == productName) {
            alert("Sản phẩm đã tồn tại trong giỏ hàng")
            return
        }
    }
    var TRContent = '';
    TRContent += '<tr>';
    TRContent += '<td><img src="' + productImg + '" alt=""></td>';
    TRContent += '<td class="td-2">';
    TRContent += '<p><span class="cart-product-title">'+ productName +'</span></p>';
    TRContent += '<input style="height: 35px; width: 70px; display: flex; font-size: 15px; border-radius: 5px;" type="number" value="1" min="0">';
    TRContent += '<p class="span-price" style="color: #1435c3; font-weight: bold;"><span>' + productPrice + '</span>.000 ₫</p>';
    TRContent += '</td>';
    TRContent += '<td>';
    TRContent += '<button><i class="fa-solid fa-xmark"></i></button>';
    TRContent += '</td>';
    TRContent += '</tr>';
    addTR.innerHTML = TRContent;
    var cartTable = document.querySelector(".cart__exist table tbody")
    cartTable.append(addTR)
  
    cartTotal()
    deleteProductCart()
    
}

function cartTotal() {
    var cartItem = document.querySelectorAll(".cart__exist table tbody tr")
    var totalB = 0;

    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value
        
        var productPrice1 = cartItem[i].querySelector("tr td p.span-price span").innerHTML
        totalA = inputValue*productPrice1*1000000
        totalB = totalB + totalA;
        // console.log(totalB)
    }

    var cartTotalA = document.querySelector(".cart-price span")
    totalC = totalB.toLocaleString('de-DE');
    cartTotalA.innerHTML = totalC 
    inputChange()
}

// Delete 

function deleteProductCart() {
    var cartItem = document.querySelectorAll(".cart__exist table tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll("tr td button")
        productT[i].addEventListener("click", function(event) {
            var cartDelete = event.target
            var cartItemR = cartDelete.parentElement.parentElement.parentElement
            cartItemR.remove();
            // console.log(cartItemR)
            cartTotal()
        })
    }
}

function inputChange() {
    var cartItem = document.querySelectorAll(".cart__exist table tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change", function() {
            cartTotal()
        }) 
    }
}
