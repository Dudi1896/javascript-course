"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Lab 6

      Project to validate a form used for setting up a new account
      Author: Denzel Udemba
      Date:   03/07/23

      
*/

let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", function () {
      if (!pwd.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      alert(`Your password must be at least 8 
      characters with at least one letter and one number`);
      }   
      else if (pwd.value !== pwd2.value) {
      alert(`Your passwords must match`);
      }
      else {
            alert(``);
      }
});
