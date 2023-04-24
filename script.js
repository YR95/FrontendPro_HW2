// Отримати від користувача 3 рядки та вивести їх у довільному
// порядку однією командою (конкатенація);
firstInputText = prompt("Input first string");
secondInputText = prompt("Input second string");
thirdInputText = prompt("Input third string");
//так
console.log(`Result string v1: ${firstInputText}${secondInputText}${thirdInputText}`);
//або так
console.log("Result string v2: " + firstInputText + secondInputText + thirdInputText);
//або ще так
console.log("Result string v3: " + firstInputText.concat(secondInputText).concat(thirdInputText));


//Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.
inputText = prompt("Type five-digit number", '12345');
console.log(`result : ${inputText[0]} ${inputText[1]} ${inputText[2]} ${inputText[3]} ${inputText[4]}`);
