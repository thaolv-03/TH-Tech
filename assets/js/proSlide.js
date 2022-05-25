document.querySelector('.btn-color-2').addEventListener('click', ()=> {
    $('.btn-color-2').addClass('active');
    $('.btn-color-1').removeClass('active');
    $('.product__img2').addClass('active');
    $('.product__img1').removeClass('active');
})

document.querySelector('.btn-color-1').addEventListener('click', ()=> {
    $('.btn-color-1').addClass('active');
    $('.btn-color-2').removeClass('active');
    $('.product__img1').addClass('active');
    $('.product__img2').removeClass('active');
})


document.querySelector('.btn-capacity-2').addEventListener('click', ()=> {
    $('.btn-capacity-2').addClass('active');
    $('.btn-capacity-1').removeClass('active');
})

document.querySelector('.btn-capacity-1').addEventListener('click', ()=> {
    $('.btn-capacity-1').addClass('active');
    $('.btn-capacity-2').removeClass('active');
})

