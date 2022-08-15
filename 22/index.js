window.onload = function () {  
    const canvas = document.querySelector('#canvas')
    const reduce = document.querySelector('.reduce')
    const add = document.querySelector('.add')
    const num = document.querySelector('.num')
    const colorEl = document.querySelector('#color')
    const clearEL = document.querySelector('.clear')

    const ctx = canvas.getContext('2d');
    let size = 10
    let isPressed = false
    let color = 'black'
    let x
    let y

    canvas.addEventListener('mousedown',(e)=>{
        isPressed = true
        x = e.offsetX
        y = e.offsetY
    })
    canvas.addEventListener('mouseup',(e)=>{
        isPressed = false
        x = undefined
        y = undefined
    })
    canvas.addEventListener('mousemove',(e)=>{
        if(isPressed){
            const x2 = e.offsetX
            const y2 = e.offsetY
            drawCircle(x2,y2)
            drawLine(x,y,x2,y2)

            x = x2
            y = y2
        }
    })
    function drawCircle(x,y){
        ctx.beginPath();
        ctx.arc(x,y,size,0,Math.PI*2)
        ctx.fillStyle = color
        ctx.fill()
    }
    function drawLine(x1,y1,x2,y2){
        ctx.beginPath();
        ctx.moveTo(x1,y1)
        ctx.lineTo(x2,y2)
        ctx.strokeStyle = color
        ctx.lineWidth = size*2
        ctx.stroke()
    }
    function updateSizeOnScreen(){
        num.innerHTML = size
    }

    add.addEventListener('click',()=>{
        size +=5
        
        if(size > 50){
            size = 50
        }
        updateSizeOnScreen()
    })
    reduce.addEventListener('click',()=>{
        size -=5
        
        if(size < 5){
            size = 5
        }
        updateSizeOnScreen()
    })
    colorEl.addEventListener('change',(e)=> color = e.target.value)
    clearEL.addEventListener('click',()=> ctx.clearRect(0,0,canvas.width,canvas.height))
/* canvas 学习:https://blog.csdn.net/NiHoAjy/article/details/119682331 */
}

