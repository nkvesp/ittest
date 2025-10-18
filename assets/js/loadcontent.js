const quizDataUrl = "./assets/data/data.json"

export async function addContent() {
    const response = await fetch(quizDataUrl)
    let quizData = await response.json()
    return quizData
}