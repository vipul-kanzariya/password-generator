const characters = [
    [..."abcdefghijklmnopqrstuvwxyz"],
    [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
    [..."!@#$%^&*()-_=+[]{};:,.?"],
    [..."0123456789"]
];

let btn = document.getElementById("generator");
let dis1 = document.getElementById("pwd1");
let dis2 = document.getElementById("pwd2");
let error = document.querySelector('.error');

let pwdLength = document.getElementById("pwd-length");
let includeNumbers = document.getElementById("include-numbers");
let includeSymbols = document.getElementById("include-symbols");


 function generatePwd(){
    copyMessage.innerText = " "

    let length = pwdLength.value || 15;
    if(length <= 8){
        return error.innerText = "password length must greater than 8"
    }
    else{
        error.innerText = " "
    }
    dis1.innerText = " ";
    dis2.innerText = " ";
    let availableGroups = characters.slice(0, 2);
    if(includeSymbols.checked){
        availableGroups.push(characters[2]);
    }
    if(includeNumbers.checked){
        availableGroups.push(characters[3]);
    }

    for(let i =0;i < length; i++){
         let group1 = availableGroups[Math.floor(Math.random() * availableGroups.length)];
        let character1 = group1[Math.floor(Math.random() * group1.length)];
        let group2 = availableGroups[Math.floor(Math.random() * availableGroups.length)];
        let character2 = group2[Math.floor(Math.random() * group2.length)];
        
        dis1.innerText += character1
        dis2.innerText += character2

     }
}
let copyMessage = document.getElementById("copy-message");

dis1.addEventListener("click", () => {
    navigator.clipboard.writeText(dis1.innerText);
    copyMessage.innerText = "Password is copied!"
});

dis2.addEventListener("click", () => {
    navigator.clipboard.writeText(dis2.innerText);
    copyMessage.innerText = "Password is copied!"

});