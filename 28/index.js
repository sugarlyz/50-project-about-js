window.onload = function () {
    const APIURL = 'https://api.github.com/users/'
    const search = document.querySelector('#search')
    const card = document.querySelector('.card')
    const form = document.querySelector('form')

    async function getUser(username) {

        try {
            const { data } = await axios(APIURL + username)
            console.log(data)
            createUserCard(data)
            getRepos(username)
            card.classList.add('user')
        } catch (err) {
            if (err.response.status == 404) {
                createErrorCard('No profile with this username')
            }
        }
    }

    async function getRepos(username) {
        try {
            const { data } = await axios(APIURL + username + '/repos?sort=created')
            addReposToCard(data)
        } catch {
            createErrorCard('Problem fetching repos')
        }
    }
    function createUserCard(user) {
        const cardHTML = `
        <div>
                <img src='${user.avatar_url}' alt='${user.name}'/> 
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</P>
                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>
                <div class="repos"></div>
            </div>
        `
        card.innerHTML = cardHTML
    }

    function createErrorCard(msg) {
        const cardHTML = `<h1>${msg}</h1>`
        card.innerHTML = cardHTML
    }
    function addReposToCard(repos) {
        const reposEl = document.querySelector('.repos')
        repos.slice(0, 5).forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.herf = repo.html_url
            repoEl.target = '_black'
            repoEl.innerText = repo.name
            reposEl.appendChild(repoEl)
        })
    }
    form.addEventListener('submit', (e) => {
        e.preventDefault()  //阻止form提交的默认行为，即页面的跳转和刷新
        const user = search.value
        if (user) {
            getUser(user)
            search.value = ''
        }
    })
}

