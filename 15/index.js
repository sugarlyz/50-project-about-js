window.onload =function(){
    const counters = document.querySelectorAll('.count')

    counters.forEach(counter=>{
        
        const updateCounter = ()=>{
            const target = +counter.getAttribute('data-target')
            const c = +counter.innerText
            const increment = target / 200
            
            if(c < target){
                counter.innerText = `${Math.ceil(c+increment)}`
                setTimeout(updateCounter,1)
            }else{
                counter.innerText = target
            }
        }
        updateCounter()
    })
}

