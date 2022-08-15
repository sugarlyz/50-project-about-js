window.onload = function () {
    const liters = document.querySelector('#liters')
    const water = document.querySelectorAll('.water')
    const percentage = document.querySelector('.percentage')

    for (let i = 0; i < water.length; i++) {

        water[i].onclick = function () {
            if (water[i].classList.contains('full')) {
                if(!water[i].nextElementSibling.classList.contains('full')){
                    liters.innerHTML = 2 - (i)*0.25 +'L'
                    percentage.innerHTML = 12.5*(i) +'%'
                    percentage.style.height= 12.5*(i) +'%'
                    water[i].classList.remove('full')
                }else{
                    liters.innerHTML = 2 - (i+1)*0.25 +'L'
                    percentage.innerHTML = 12.5*(i+1) +'%'
                    percentage.style.height= 12.5*(i+1) +'%'
                    for(let j=i+1;j<water.length;j++){
                        water[j].classList.remove('full')
                    }
                }
            } else {
                liters.innerHTML = 2 - (i+1)*0.25 +'L'
                percentage.innerHTML = 12.5*(i+1) +'%'
                percentage.style.height= 12.5*(i+1) +'%'
                for (let j = 0; j <= i; j++) {
                    water[j].classList.add('full')
                }
            }
        }
    }

}

