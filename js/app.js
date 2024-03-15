console.log('mastermind')

//let randomNumbers = []
//    while(randomNumbers.length < 4){
//        let randomNumber = Math.floor(Math.random()* 9) + 1;
//        if(!randomNumbers.includes(randomNumber)){
//            randomNumbers.push(randomNumber)
//        }
//    }

//function getRandomArbitrary(min, max) {
//    return Math.random() * (max - min) + min;
//}
//const randomNumbers = getRandomArbitrary(1, 9)


//funzione che genera una array di 4 numeri univoci
//min num minimo, max num massimo, count quanti num voglio
function randomNumbersArray(min, max, count){
    let randomNumbers = [];
    while(randomNumbers.length < count){
        let randomNumber = Math.floor(Math.random()* max) + min;
        if(!randomNumbers.includes(randomNumber)){
            randomNumbers.push(randomNumber);
        }
    }return randomNumbers;
}
const arrayNumbers = randomNumbersArray(1, 9, 4);
console.log(arrayNumbers);
const inputDomElement = document.getElementById('number');
const sendButtomElement = document.getElementById('gioca');
//const resultDivElement = document.getElementById('result')
let userNumbers;
sendButtomElement.addEventListener('click', function(){
    const resultDivElement = document.getElementById('result')
    userNumbers = inputDomElement.value;
    const userNumberArray = convertStringToNumberArray(userNumbers);
    console.log(userNumberArray);
    let counter = 0
   for(let index = 0; index < userNumberArray.length; index++){
    const indexChecked = arrayNumbers.indexOf(userNumberArray[index])
    console.log(indexChecked)
    if(indexChecked !== (- 1)){
        counter++;  
        
    }
   }console.log(`hai trovato ${counter} numeri`)
   resultDivElement.innerHTML += `<p>hai inserito ${userNumbers} / hai trovato ${counter} numeri</p>`


});





function convertStringToNumberArray(numberString){
    let userArray = []
    for(let i = 0; i < numberString.length; i++){
        //console.log(userNumbers[i]);
        userArray.push(parseInt(numberString[i]));
        
    }
    return userArray
}
