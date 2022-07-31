window.onload =function(){
    const boxes = document.querySelectorAll('.block')
    window.addEventListener('scroll',checkBoxes)
    
    checkBoxes()
    function checkBoxes(){
        const triggerBottom = window.innerHeight / 5 * 4

        boxes.forEach(box =>{
            const boxTop = box.getBoundingClientRect().top //Element.getBoundingClientRect()方法返回元素的大小及其相对于视口的位置
            if(boxTop < triggerBottom){
                box.classList.add('show')
            }else{
                box.classList.remove('show')
            }
        })
    }

}