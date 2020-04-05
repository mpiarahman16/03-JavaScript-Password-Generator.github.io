//generate password
function generate(){

    //set password length/complexity
    let complexity = document.getElementById("slider").value;

    //possible password values
let values = "ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz1234567890!@#$%^&*()_+";
let password= "";

//create for loop to choose password characters
var upperCase = confirm ('Do you want upper case characters?');
if (upperCase == true) {
var lowerCase = confirm ('Do you want lower case character?')  
if (lowerCase == true) 
var specialCharacters = confirm ('Do you want special characters?')
if (specialCharacters == true)
var numbers = confirm ('Do you want numbers?')
if (numbers == true);
}

else {
    return;
}





for(var i = 0; i<= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
}

// add password to textbox/display area
document.getElementById("display").value = password;

document.getElementById("lastPassword").innerHTML += password + "<br />";
}
//display length
document.getElementById("length").innerHTML = "Length: 8 to 128";

