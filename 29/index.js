window.onload = function () {  
    const times = document.querySelector('.times')
    const imgEL = document.querySelector('.img')
    let clickTimes = 0
    let timesClicked = 0

    imgEL.addEventListener('click',(e)=>{
        if( clickTimes === 0){
            clickTimes = new Date().getTime()
        }else{
            if( new Date().getTime() - clickTimes < 800 ){
                createHeart(e)
                clickTimes = 0
            }else{
                clickTimes = new Date().getTime()
            }
        }
    })
    function createHeart(e){
        const  x = e.clientX
        const  y = e.clientY

        const i = document.createElement('i')
        i.classList.add('fa')
        i.classList.add('fa-heart')

        const offTop = e.target.offsetTop
        const offLeft = e.target.offsetLeft

        const xInside =x- offLeft
        const yInside =y- offTop

        i.style.top = `${yInside}px`
        i.style.left = `${xInside}px`
        
        imgEL.appendChild(i)
        times.innerHTML = ++timesClicked

        setTimeout(()=> i.remove(),1000)
    }
}

