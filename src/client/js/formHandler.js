import { validURL } from './urlChecker'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if (!validURL(formText)) {
        alert("Not a valid url")
        return;
    }

    console.log("::: Form Submitted :::")
    fetch(`http://localhost:8081/sentiment?url=${formText}`)
    .then(res => res.json())
    .then(function(res) {
        const { ["score_tag"]: scoreTag, agreement, subjectivity, confidence, irony } = res;
        document.getElementById('results').innerHTML = 
        `
        Score Tag: ${scoreTag}</br>
        Agreement: ${agreement}</br>
        Subjectivity: ${subjectivity}</br>
        Irony: ${irony}</br>
        Confidence: ${confidence}</br>
        `
    })
    .catch(error => alert("Something went wrong please try again later"))
}

export { handleSubmit }
