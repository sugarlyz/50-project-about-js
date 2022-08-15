window.onload = function () {
   const btn = document.querySelector('.btn')

    btn.addEventListener('click',(e)=>{
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x-buttonLeft
        const yInside = y-buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside +'px'
        circle.style.left = xInside +'px'

        btn.appendChild(circle)

        setTimeout(()=>circle.remove(),500)

    })    

}

