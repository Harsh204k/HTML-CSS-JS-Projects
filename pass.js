const length=12;
const lowercase="qwertyuiopasdfghjklzxcvbnm";
const uppercase="QWERTYUIOPASDFGHJKLZXCVBNM";
const numbers="1234567890";
const symbols="!@#$%^&*_+~?";
arr1=[lowercase,uppercase,numbers,symbols];

function genpassword(){
    var password="";
    for(var i = 0; i < length; i++){
        const random=Math.floor(Math.random() * arr1.length);
        var len = arr1[random].length;
        
        const randomIndex = Math.floor(Math.random() * len);
        password += arr1[random][randomIndex];
    }
    document.getElementById("h3").textContent=password;
}