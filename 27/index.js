window.onload = function () {  
    const btn =document.querySelector('button')
    const msg = document.querySelector('.msg')
    const classList = ['info','success','error']
    const message = ['Message One','Message Two','Message Three','Message Four']
    btn.addEventListener('click',getMsg)
    function getMsg(){
        const child = document.createElement('div')
        child.classList.add(`${classList[Math.floor(Math.random()*3)]}`)
        child.innerHTML = `${message[Math.floor(Math.random()*4)]}`
        msg.appendChild(child)

        setTimeout(()=>{
            child.remove()
        },3000)
    }
}

