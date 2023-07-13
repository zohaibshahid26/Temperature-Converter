const temperatureInput = document.querySelector('.get-temperature input');
const fromTemperatureSelect = document.getElementById('from-temperature');
const toTemperatureSelect = document.getElementById('to-temperature');
const convertButton = document.querySelector('.convert-button button');
const resultText = document.getElementById('result-text');

convertButton.addEventListener('click', convertTemperature);

function convertTemperature() {
  const temperature = parseFloat(temperatureInput.value);
  const fromUnit = fromTemperatureSelect.value;
  const toUnit = toTemperatureSelect.value;

  if (isNaN(temperature)) {
    resultText.textContent = 'Please enter a valid temperature.';
    return;
  }

  let result;
  if (fromUnit === 'Celsius') {
    if (toUnit === 'Celsius') {
      result = temperature;
    } else if (toUnit === 'Fahrenheit') {
      result = (temperature * 9/5) + 32;
    } else if (toUnit === 'Kelvin') {
      result = temperature + 273.15;
    }
  } else if (fromUnit === 'Fahrenheit') {
    if (toUnit === 'Celsius') {
      result = (temperature - 32) * 5/9;
    } else if (toUnit === 'Fahrenheit') {
      result = temperature;
    } else if (toUnit === 'Kelvin') {
      result = (temperature + 459.67) * 5/9;
    }
  } else if (fromUnit === 'Kelvin') {
    if (toUnit === 'Celsius') {
      result = temperature - 273.15;
    } else if (toUnit === 'Fahrenheit') {
      result = (temperature * 9/5) - 459.67;
    } else if (toUnit === 'Kelvin') {
      result = temperature;
    }
  }

  if (isNaN(result)) {
    resultText.textContent = 'An error occurred during the conversion.';
  } else {
    resultText.textContent = `${result.toFixed(2)}° ${toUnit}.`;
  }
}
