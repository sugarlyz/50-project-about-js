window.onload =function(){
    const content = document.querySelectorAll('.content')
    const buttons = document.querySelectorAll('button')

    /* buttons.forEach(i=>{
        i.addEventListener('click',()=>{
           i.parentNode.classList.toggle('active')
        })
    }) */

    for(let j=0;j<buttons.length;j++){
        let flag = 1
        buttons[j].onclick = function(){
            console.log(flag)
            if(flag == 1){
                content[j].classList.add('active')
                flag = 0 
            }else{
                content[j].classList.remove('active')
                flag = 1
            }
        }
    }
}

/* toggle() 中的第一个参数为必需参数，当元素中的存在该参数指定的 class 属性时，
将移除该 class 属性，同时返回 false；当不存在该参数指定的 class 属性时，
则对元素添加该 class 属性，同时返回 true。
可用来实现添加，删除一个类的操作
 */