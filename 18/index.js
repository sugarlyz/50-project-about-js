window.onload = function () {
    const body = document.querySelector('body')
    const slides = document.querySelectorAll('.slide')
    const left_btn = document.querySelector('.left-btn')
    const right_btn = document.querySelector('.right-btn')
    var flag = 0

    left_btn.addEventListener('click',()=>{
        slides[flag].classList.remove('active')
        flag--
        if( flag < 0){
            flag = 4
        }
        body.style.backgroundImage = slides[flag].style.backgroundImage
        slides[flag].classList.add('active')
    })
    right_btn.addEventListener('click',()=>{
        slides[flag].classList.remove('active')
        flag++
        if(flag > 4){
            flag=0
        }
        body.style.backgroundImage = slides[flag].style.backgroundImage
        slides[flag].classList.add('active')
    })
}

