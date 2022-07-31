window.onload =function(){
    const joke_content = document.querySelector('#joke')
    const btn = document.querySelector('.btn')

    btn.addEventListener('click',generateJoke)
    generateJoke()

    async function generateJoke(){
        const config = {
            header:{
                accept:'application/json',
            },
        }
        const res = await fetch('https://icanhazdadjoke.com',config)
        const data = await res.json()

        joke_content.innerHTML = data.joke
    }
    /* 这里是使用的fetch发送请求，也可以使用Ajax发送请求 */
}