window.onload = function(){
    const circle = document.getElementsByClassName('circle')
    const lines = document.getElementsByClassName('line')
    const prev = document.getElementById('prev')
    const next = document.getElementById('next')
    let count=0

    circle[0].style.borderColor = '#3498db'
    prev.setAttribute('disabled',true)
    next.onclick = function(){
        if(count!=3){
            prev.removeAttribute('disabled')
            lines[count].style.backgroundColor = '#3498db'
            count++;
            circle[count].style.borderColor = '#3498db'
        }
        if(count == 3){
            next.setAttribute('disabled',true)
        }
        
    };
    prev.onclick = function(){
        if(count!==0){
            next.removeAttribute('disabled')
            circle[count].style.borderColor = '#e0e0e0'
            count--;
            lines[count].style.backgroundColor = '#e0e0e0'
        }
        if(count == 0){
            prev.setAttribute('disabled',true)
        }

    }

}