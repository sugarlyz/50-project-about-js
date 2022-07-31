window.onload =function(){
    const button = document.querySelector('button')
    const context = document.querySelector('.context')

    button.addEventListener('click',()=>{
        context.classList.toggle('active')
    })
}

