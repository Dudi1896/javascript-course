"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      

      Project to convert between celsius and fahrenheit
      Author: Denzel Udemba   
      Date:   04/30/23

     

*/
// Celsius to Fahrenheit
$(document).ready(function () {
  $("#cvalue").change(function () {
    let celsius = $(this).val();
    let fahrenheit = 1.8 * celsius + 32;
    $("#fValue").val(fahrenheit.toFixed(0));
  });

  // Fahrenheit to Celsius
  $("#fValue").change(function () {
    let fahrenheit = $(this).val();
    let celsius = (fahrenheit - 32) / 1.8;
    $("#cValue").val(celsius.toFixed(0));
  });
});
