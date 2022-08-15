window.onload = function () {  
    const btn_left = document.querySelector('.left-btn')
    const btn_right = document.querySelector('.right-btn')
    const left = document.querySelector('.left')
    const right = document.querySelector('.right')
    let tag = 1

    function transform(){
        if(left.style.top == `-300%`){
            left.style.top = '0'
            right.style.top = '-300%'
            tag = 1
        }else{
            left.style.top = `-${tag*100}%`
            right.style.top = `-${300 - tag*100}%`
            tag++
        }
    }
    btn_left.addEventListener('click',transform)
    btn_right.addEventListener('click',transform)
}

