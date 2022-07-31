window.onload =function(){
    const container = document.querySelector('.container')

    document.addEventListener('keydown',(event)=>{
        container.innerHTML = `
        <div class='text'>
            ${event.key === ' ' ? 'Space' : event.key}
            <small>event.key</small>
        </div>
        <div class='text'>
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>
        <div class='text'>
            ${event.code}
            <small>event.code</small>
        </div>
        `
    })
    //keyCode 在typescript中被弃用
}