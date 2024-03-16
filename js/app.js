console.log('mastermind');


//recupero input utente
const inputDomElement = document.getElementById('number');
//recuper pulsante gioca
const sendButtomElement = document.getElementById('gioca');
//recupero dic con id result
const resultDivElement = document.getElementById('result')
//genero array di 4 num random da 1 a 9
const arrayNumbers = randomNumbersArray(1, 9, 4);
console.log(arrayNumbers);
//metto una funzione al click del pulsante gioca
sendButtomElement.addEventListener('click', function () {
    //recupro l'input dell'utente
    const userNumbers = inputDomElement.value;
    //converto i valori dell'utente in una stringa di numeri interi
    const userNumberArray = convertStringToNumberArray(userNumbers);
    //azzero l'input
    inputDomElement.value = "";
    //cerco i numeri nei due array
    const validNumbers = findArrayNumbers(userNumberArray, arrayNumbers);
    //se sono uguali e alla stessa posizione l'utente ha vinto
    if(validNumbers === "xxxx"){
        resultDivElement.innerHTML += `<div class="result"><div>${userNumbers}</div><div><span>"HAI VINTO"</span></div><div>${validNumbers}</div></div>`
        console.log('hai vinto');
    }else{
        resultDivElement.innerHTML += `<div class="result"><div>${userNumbers}</div><div></div><div>${validNumbers}</div></div>`
    }



});

//funzione per trovare i numeri dell'utente in quelli del pc
function findArrayNumbers(userArray, consoleNumbers) {
    let result = ""
    for (let index = 0; index < userArray.length; index++) {
        const indexNumber = consoleNumbers.indexOf(userArray[index]);
        if (indexNumber !== -1) {
            if (indexNumber === index) {
                result += "x";
                console.log(result);
            } else {
                result += "o";
                console.log(result);
            }
        }
    }
    return result;
}

//funzione per convertire la stringa in array
function convertStringToNumberArray(numberString) {
    let userArray = [];
    for (let i = 0; i < numberString.length; i++) {
        //console.log(userNumbers[i]);
        userArray.push(parseInt(numberString[i]));

    }
    return userArray;

}
//funzione per creare array di tot numeri random unici
function randomNumbersArray(min, max, count) {
    let randomNumbers = [];
    while (randomNumbers.length < count) {
        let randomNumber = Math.floor(Math.random() * max) + min;
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    } return randomNumbers;
}