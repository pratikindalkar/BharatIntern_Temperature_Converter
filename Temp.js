document.getElementById('clear').onclick=clearForm;

function convertToCelsius() {
  var celsiusInput = document.getElementById('celsius');
  var fahrenheitInput = document.getElementById('fahrenheit');
  
  if (celsiusInput.value !== '') {
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = celsius * 9/5 + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
  } else {
    fahrenheitInput.value = '';
  }
}

function convertToFahrenheit() {
  var celsiusInput = document.getElementById('celsius');
  var fahrenheitInput = document.getElementById('fahrenheit');
  
  if (fahrenheitInput.value !== '') {
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5/9;
    celsiusInput.value = celsius.toFixed(2);
  } else {
    celsiusInput.value = '';
  }
}

function clearForm() {
    document.getElementById('fahrenheit').value='';
    document.getElementById('celsius').value='';
}