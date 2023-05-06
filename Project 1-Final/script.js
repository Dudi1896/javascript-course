"use strict";
/*    JavaScript Final Exam
		Proejct 1
      Project to retrieve the Astronomy Picture of the Day from NASA
      Author: Denzel Udemba
      Date:   05/05/23

*/
let DEMO_KEY=`fmsuX7SgEKBP28A2dJ5cTLOXUxFgkTHEwfIALIu9`;


let imageBox = document.getElementById("nasaImage");
let dateBox = document.getElementById("dateBox");

dateBox.onchange = function() {   
      let dateStr = dateBox.value;

      fetch(`https://api.nasa.gov/planetary/apod?api_key=fmsuX7SgEKBP28A2dJ5cTLOXUxFgkTHEwfIALIu9&date=${dateStr}`)
            .then(response => response.json())
            .then(data => showPicture(data))
            .catch(error => console.error(error));
}

function showPicture(json) {
      if (json.media_type === "video") {
        let html = `<iframe src="${json.url}"></iframe><h1>${json.title}</h1><p>${json.explanation}</p>`;
        imageBox.innerHTML = html;
      } else if (json.media_type === "image") {
        let html = `<img src="${json.url}"/><h1>${json.title}</h1><p>${json.explanation}</p>`;
        imageBox.innerHTML = html;
      } else {
        imageBox.innerHTML = "Image not Available";
      }
    }

