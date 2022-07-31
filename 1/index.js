window.onload=function(){
    const li=document.getElementsByTagName('li')
    const span=document.getElementsByTagName('span')
    var tag=0
    li[0].style.width = '1150' +'px'
    span[0].style.opacity = 1
    for(let i=0;i<li.length;i++){
        li[i].onclick=function(){
            tag = i
            console.log(i)
            li[i].style.width = '1150' +'px'
            span[i].style.opacity = 1
            clear()
        }
    }

    function clear(){
        for(let j=0;j<li.length;j++){
            console.log(j)
            if( j != tag){
                li[j].style.width = '120' +'px'
                span[j].style.opacity=0
            }
        }
    }
}