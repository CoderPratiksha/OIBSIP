function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var unit = document.getElementById("unit").value;
    var outputElement = document.getElementById("output");

    if (unit === "celsius") {
        var fahrenheit = (temperatureInput * 9/5) + 32;
        outputElement.innerHTML = temperatureInput + " Celsius is " + fahrenheit.toFixed(2) + " Fahrenheit.";
        
    } else {
        var celsius = (temperatureInput - 32) * 5/9;
        outputElement.innerHTML = temperatureInput + " Fahrenheit is " + celsius.toFixed(2) + " Celsius.";
    }
}