window.onload = function () {  
    const img_containers = document.querySelectorAll('.img-container')
    const fill = document.querySelector('.fill')

    fill.addEventListener('dragstart',(e)=>{
        fill.classList.add('hold')
        /* class='invisible'默认标签不显示 */
        setTimeout(()=> fill.className = 'invisible',0)
    })
    fill.addEventListener('dragend',()=> fill.className = 'fill')

    img_containers.forEach(img =>{
        img.addEventListener('dragover',(e)=>{
            e.preventDefault()
        })
        img.addEventListener('dragenter',(e)=>{
            e.preventDefault()
            img.classList.add('hovered')
        })
        img.addEventListener('dragleave',(e)=>{
            img.className = 'img-container'
        })
        img.addEventListener('drop',(e)=>{
            console.log(img)
            img.className = 'img-container'
            img.append(fill)
        })
    })
    /* 关于拖拽：https://blog.csdn.net/weixin_46831501/article/details/123267221 */   
}

