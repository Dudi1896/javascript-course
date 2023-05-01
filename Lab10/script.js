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


  let driveFind = new google.maps.DirectionsService();
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
  startingCity.addEventListener("click", drawRoute);
  endingCity.addEventListener("click", drawRoute);

  // Define the drawRoute function
  function drawRoute() {
    if (startingCity.selectedIndex != 0 && endingCity.selectedIndex != 0) {
      let driveRoute = {
        origin: startingCity.value,
        destination: endingCity.value,
        travelMode: google.maps.TravelMode.DRIVING,
      };
      driveFind.route(driveRoute, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          // Display the route on the map and the turn-by-turn directions in the panel
          driveDraw.setDirections(response);
          driveDraw.setMap(myMap);
          driveDraw.setPanel(driveDirections);
        } else {
          // Display an error message if the request was not successful
          driveDirections.textContent = "Directions Unavailable: " + status;
        }
      });
    } else {
      driveDraw.setMap(null);
    }
  }

};
