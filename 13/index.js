window.onload =function(){
    const text = document.querySelector('textarea')
    const tags = document.querySelector('.tags')

    text.focus()//el.focus()让el获取焦点

    text.addEventListener('keyup',(e)=>{
        tags.innerHTML = `<span class=tag>${text.value}</span>`
        if(e.key == 'Enter'){
            setTimeout(() => {
                e.target.value = ''
            }, 10)
            randomSelect()
        }
        
    })
    function randomSelect(){
        const time = 30
        const tag = document.querySelector('.tag')
        const interval = setInterval(()=>{
            tag.classList.add('highlight')

            setTimeout(()=>{
                tag.classList.remove('highlight')
            },100)
        },100)

        setTimeout(()=>{
            clearInterval(interval)
            setTimeout(()=>{
                tag.classList.add('highlight')
            },100)
        },time*100)

    }

}

