window.onload = function(){
    const container = document.getElementsByClassName('container')[0]
    const button = document.getElementsByTagName('button')[0]
    const input = document.getElementsByTagName('input')[0]
    let flag = 1

    button.onclick = function(){
        if(flag){
            container.classList.add('active')
            flag = 0
        }
        else{
            container.classList.remove('active')
            flag = 1
        }
        input.focus()//获取焦点
    }
}