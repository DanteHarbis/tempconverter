var celsiusInput = document.getElementById("Input-Celsius");
      var fahrenheitInput = document.getElementById("Input-Fahrenheit");
      
      // function to convert celsius to fahrenheit
      function celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
      }
      
      // function to convert fahrenheit to celsius
      function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
      }
      
      // listen for changes to celsius input
      celsiusInput.addEventListener("input", function() {
        var celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
          var fahrenheit = celsiusToFahrenheit(celsius);
          fahrenheitInput.value = fahrenheit.toFixed(1);
        } else {
          fahrenheitInput.value = "";
        }
      });
      
      // listen for changes to fahrenheit input
      fahrenheitInput.addEventListener("input", function() {
        var fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
          var celsius = fahrenheitToCelsius(fahrenheit);
          celsiusInput.value = celsius.toFixed(1);
        } else {
          celsiusInput.value = "";
        }
      });