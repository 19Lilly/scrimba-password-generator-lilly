const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let password1El = document.getElementById("password-1")
let password2El = document.getElementById("password-2")

let wrapper = document.getElementsByClassName("wrapper")[0];
document.getElementById("toggler").addEventListener("change", (event) => {
  console.log(toggler)
  event.target.checked ? wrapper.removeAttribute("data-theme") : wrapper.setAttribute("data-theme", "dark");
});

function copyPassword(event) {
    navigator.clipboard.writeText(event.target.innerText)
    
    document.getElementById("passwordCopiedAlert").classList.toggle("hide")
    setTimeout(() => {
        document.getElementById("passwordCopiedAlert").classList.toggle("hide")
    }, 1500)
}

function generatePassword(){
    password1El.textContent = passwordGenerator();
    password2El.textContent = passwordGenerator();
 }

function passwordGenerator() {
    let password = ""
    let passwordLength = document.getElementById("password-length").value
    let withoutSymbols = document.getElementById("without-symbols").checked
    let withoutNumbers = document.getElementById("without-numbers").checked

    if (passwordLength === 0 || passwordLength<5 || passwordLength>20 ) {
        document.getElementsById("generate-password").disabled=true;
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

  
   















 