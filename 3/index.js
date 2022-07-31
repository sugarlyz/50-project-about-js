window.onload=function(){
    const container = document.getElementsByClassName('container')[0]
    const bars = document.getElementsByClassName('fa-bars')[0]
    const remove = document.getElementsByClassName('fa-remove')[0]

    bars.onclick = function(){
        container.classList.add('rotating')
    }
    remove.onclick = function(){
        container.classList.remove('rotating')
    }
}