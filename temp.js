// script.js

const celsiusSlider = document.getElementById('celsius');
const fahrenheitSlider = document.getElementById('fahrenheit');
const celsiusValue = document.getElementById('celsius-value');
const fahrenheitValue = document.getElementById('fahrenheit-value');

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function updateFahrenheit() {
    const celsius = celsiusSlider.value;
    celsiusValue.textContent = celsius;
    const fahrenheit = celsiusToFahrenheit(celsius);
    fahrenheitSlider.value = fahrenheit;
    fahrenheitValue.textContent = Math.round(fahrenheit);
}

function updateCelsius() {
    const fahrenheit = fahrenheitSlider.value;
    fahrenheitValue.textContent = fahrenheit;
    const celsius = fahrenheitToCelsius(fahrenheit);
    celsiusSlider.value = celsius;
    celsiusValue.textContent = Math.round(celsius);
}

celsiusSlider.addEventListener('input', updateFahrenheit);
fahrenheitSlider.addEventListener('input', updateCelsius);

// Initial update
updateFahrenheit();
;
