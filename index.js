const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password = ""
let password1El = document.getElementById("password-1")

function sum (a,b){
    return a + b;
}

console.log(sum(3,7));

function generatePassword(characters) {
    for (let i = 0; i <16; i++){
    return password[i] += characters[Math.floor(Math.random()*characters.length)];
    
}
password1El.text = password;
}

generatePassword(characters)

console.log(password);




 