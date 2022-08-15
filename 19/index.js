window.onload = function () {
    const html = document.querySelector('html')
    const hour = document.querySelector('.hour')
    const min = document.querySelector('.min')
    const sec = document.querySelector('.sec')
    const t = document.querySelector('.time')
    const toggle = document.querySelector('.toggle')
    const dates = document.querySelector('.date')
    const days = ['Sunday', 'Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['Jan', 'Feb', "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    toggle.addEventListener('click', () => {
        html.classList.toggle('dark')
        if (html.classList.contains('dark')) {
            toggle.innerHTML = 'Light mode'
        }
    })
    function setTime() {
        const time = new Date()
        const month = time.getMonth()
        const day = time.getDay()
        const date = time.getDate()
        const hours = time.getHours()
        const hoursForClock = hours % 12
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const ampm = hours > 12 ? 'PM' : 'AM'

        hour.style.transform=`translate(-50%,-100%) rotate(${scale(hoursForClock,0,11,0,360)}deg)`
        min.style.transform = `translate(-50%,-100%) rotate(${scale(minutes,0,59,0,360)}deg)`
        sec.style.transform = `translate(-50%,-100%) rotate(${scale(seconds,0,59,0,360)}deg)`

        dates.innerHTML = `${days[day]},${months[month]} <span class="circle">${date}</span>`
        t.innerHTML = `${hoursForClock}:${minutes <10 ? `0${minutes}`:minutes}${ampm}`

    }
    
    const scale = (num,in_min,in_max,out_min,out_max)=>{
        return (num-in_min)*(out_max-out_min) / (in_max -in_min) +out_min;
    }
    setTime()
    setInterval(setTime,1000)
}

