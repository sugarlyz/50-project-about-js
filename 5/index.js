window.onload =function(){
    const bg = document.getElementsByClassName('bg')[0]
    const loading_text = document.getElementsByClassName('loading-text')[0]
    let load=1

    let int =setInterval(blurring,30)

    function blurring(){
        load++
        if(load>99){
            clearInterval(int)
        }
        loading_text.innerHTML = `${load}%`   
        loading_text.style.opacity = scale(load,0,100,1,0)
        bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
    }

    //将一系列数字映射到另一个数字范围
    //方法被提出源自： https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    const scale =(num,in_min,in_max,out_min,out_max) =>{
        return ((num-in_min)*(out_max-out_min))/(in_max-in_min) + out_min
    }
}