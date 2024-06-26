const celsius=document.getElementById("Celcius");
const celsiusvalue=document.getElementById("celsius-value");
const fer=document.getElementById("Fahrenheit");
const fervalue=document.getElementById("fahrenheit-value");

function celsiusToFahrenheit(celsius){
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function updateFahrenheit(){
    const celsiuss=celsius.value;
    celsiusvalue.textContent=celsiuss;
    const fahrenheits=celsiusToFahrenheit(celsiuss);
    fer.value=fahrenheits;
    fervalue.textContent=Math.round(fahrenheits);
}

function updateCelsius(){
    const fahrenheits=fer.value;
    fervalue.textContent=fahrenheits;
    const celsiuss=fahrenheitToCelsius(fahrenheits);
    celsius.value=celsiuss;
    celsiusvalue.textContent=Math.round(celsiuss);
}

celsius.addEventListener('input',updateFahrenheit);
fer.addEventListener('input',updateCelsius);

updateFahrenheit();