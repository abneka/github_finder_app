const GIT_URL = process.env.REACT_APP_GITHUB_URL
const GIT_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    })

    const {items} = await fetch(`${GIT_URL}/search/users?${params}`,{
        headers: {
            Authorization:  `token ${GIT_TOKEN}`
        }
    }).then(r => r.json())
    
    return items
}

export const getUser = async (login) => {
   
    const res = await fetch(`${GIT_URL}/users/${login}`,{
        headers: {
            Authorization:  `token ${GIT_TOKEN}`
        }
    })

    if (res.status === 404) {
        window.location = '/notfound'
    }
    else {
        const data = await res.json()

        const response = await fetch(`${GIT_URL}/users/${login}/repos`,{
            headers: {
                Authorization:  `token ${GIT_TOKEN}`
            }
        }).then(r => r.json())

        return {data: data, repo: response}
    }
    
}