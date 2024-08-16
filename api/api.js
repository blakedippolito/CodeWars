const url = `https://www.codewars.com/api/v1/users/blakedippolito`

async function getCompleted() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

getCompleted()



async function listCompletedChallenges() {
    const url = `https://www.codewars.com/api/v1/users/blakedippolito/code-challenges/completed?page=1`

    const response = await fetch(url)
    const data = await response.json()
    console.log(Array.from(data))
}

listCompletedChallenges()