function getUserInput() {
    const userInput = document.getElementById("user-input").value;
    const result = document.getElementById("result");
    let letters = countLetters(userInput);
    let words = countWords(userInput);
    let sentences = countSentences(userInput);
    result.innerHTML = "there are " + letters + " letters " + words + 
    " words and " + sentences + " sentence in your text."
}

function countLetters(str) {
    let regex = /[a-zA-Z]/g; // only count letters
    return str.match(regex).length;
}

function countWords(str) {
    let arr = str.split(" ");
    return arr.filter(word => word !== '').length;
}

function countSentences(str) {
    let arr = str.split(".");
    return arr.filter(sent => sent !== '').length;
}

function changeBackground() {
    let random = Math.floor(Math.random() * 0xffffff).toString(16);// 0xffffff = 16777215
    document.body.style.backgroundColor = "#" + random;
}


