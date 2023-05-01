"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Lab 9

      Project to read field values from web storage
      Author: Denzel Udemba
      Date:   04/30/2023

*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

let submitButton = document.getElementById("submitButton");


function showData() {
  // Store the values of the seven objects in session storage
  sessionStorage.setItem("riderName", riderName.value);
  sessionStorage.setItem("ageGroup", ageGroup.value);
  sessionStorage.setItem("bikeOption", bikeOption.value);
  sessionStorage.setItem("routeOption", routeOption.value);
  sessionStorage.setItem("accOption", accOption.value);
  sessionStorage.setItem("region", region.value);
  sessionStorage.setItem("miles", miles.value);
  sessionStorage.setItem("comments", comments.value);
}


submitButton.addEventListener("click", function(){
      showData();
      location.href = "http://127.0.0.1:5500/Lab9/project02/lab9b.html";
});