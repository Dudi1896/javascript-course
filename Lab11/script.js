"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      

      Project to city and state information from a provided postal code
      Author: Denzel Udemba   
      Date:   04/30/2023

      
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");
let longitude = document.getElementById("longitude");
let latitude = document.getElementById("latitude");

postalCode.onblur = function () {
  let codeValue = postalCode.value;
  let countryValue = country.value;

  place.value = "";
  region.value = "";  
  longitude.value = "";
  latitude.value = "";


  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
    .then((response) => response.json())
    .then((json) => {
      place.value = json.places[0]["place name"];
      region.value = json.places[0]["state abbreviation"];
      longitude.value = json.places[0]["longitude"];
      latitude.value = json.places[0]["latitude"];
    })
    .catch((error) => console.log(error));
};
