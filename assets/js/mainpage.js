// import { addContent } from "./loadcontent.js";
// console.log(addContent)
const quizDataUrl = "./assets/data/data.json"

async function addContent() {
    const response = await fetch(quizDataUrl)
    let quizData = await response.json()
    console.log(quizData);

    return quizData
}
const data = addContent()
console.log(data.quizzes);
