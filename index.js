const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let password1El = document.getElementById("password-1")
let password2El = document.getElementById("password-2")

function generatePassword(){
    password1El.textContent = passwordGenerator();
    password2El.textContent = passwordGenerator();
    console.log("fungujem");
    console.log(password1El.textContent = passwordGenerator());
}

function passwordGenerator() {
    let password = ""
    let passwordLength = document.getElementById("password-length").value
    let withoutSymbols = document.getElementById("without-symbols").checked
    let withoutNumbers = document.getElementById("without-numbers").checked

    if (passwordLength === 0 || 20 <passwordLength< 5 ) {
        document.getElementsByTagName("button").disabled=true;
    }

    if (withoutSymbols === true && withoutNumbers === true) {
        for (let i = 0; i < passwordLength; i++){
            password += (letters[Math.floor(Math.random()*letters.length)]); 
              
        } return password;

        } else if (withoutSymbols === true && withoutNumbers === false) {
            for (let i = 0; i < passwordLength; i++){
                password += (letters.concat(numbers)[Math.floor(Math.random()*letters.concat(numbers).length)]); 
               
            } return password;
        
        } else if(withoutSymbols === false && withoutNumbers === true) {
            for (let i = 0; i < passwordLength; i++){
                password += (letters.concat(symbols)[Math.floor(Math.random()*letters.concat(symbols).length)]); 
                   
            } return password;
            
        } else
        for (let i = 0; i < passwordLength; i++){
            password += (letters.concat(numbers, symbols)[Math.floor(Math.random()*letters.concat(numbers, symbols).length)]); 
           
        } return password;
        
    }

   















 