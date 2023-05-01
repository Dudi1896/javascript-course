"use strict";
/*  JavaScript 7th Edition
    Chapter 10
   

    Driving Directions
    Author: Denzel Udemba
    Date:   04/30/23

   
*/

function showMap() {
  // Page objects
  let driveMap = document.getElementById("driveMap");
  let driveDirections = document.getElementById("driveDirections");
  let startingCity = document.getElementById("startingCity");
  let endingCity = document.getElementById("endingCity");

  

  // Google Maps API key and URL
  let apiKey = "AIzaSyB_De7KUMACdaDmpL-v1n2KNM6RrPrhkq0";
  let apiUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=showMap`;

  let driverFind = new google.maps.DirectionsService();
  let driveDraw = new google.maps.DirectionsRenderer();

  // Set default location to North Metro Campus
  let city = new google.maps.LatLng(34.08405, -84.669886);

  let myMap = new google.maps.Map(driveMap, {
    zoom: 12,
    center: city,
  });

  // Bind the DirectionsRenderer to the Google map
  driveDraw.setMap(myMap);

  // Bind the DirectionsRenderer to the HTML directions panel
  driveDraw.setPanel(driveDirections);

  // Create event listeners for the starting and ending cities
  startingCity.addEventListener("change", drawRoute);
  endingCity.addEventListener("change", drawRoute);

  // Define the drawRoute function
  function drawRoute() {
    if (startingCity.selectedIndex != 0 && endingCity.selectedIndex != 0) {
      let driveRoute = {
        origin: startingCity.value,
        destination: endingCity.value,
        travelMode: google.maps.TravelMode.DRIVING,
      };
      driveFind.route(driveRoute, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          driveDraw.setDirections(response);
        }
      });
      driveDraw.setMap(myMap);
    } else {
      driveDraw.setMap(null);
    }
  }
}
