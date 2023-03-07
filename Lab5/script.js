"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      

      Project to create a table of headings from an article
      Author: Denzel Udemba   
      Date:   03/06/23

      
*/
let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");

//The headingCount variable with an initial value of 1.
let headCount = 1;

//A constant named heading with a value of “H2”.
const heading = "H2";


for (let n = sourceDoc.firstElementChild; n !== null; n = n.nextElementSibling) {


      if (n.nodeName === heading) {
            let anchor = document.createElement("a");
            anchor.setAttribute("name", "doclink" + headCount);
            n.insertBefore(anchor, n.firstElementChild);


            let listItem = document.createElement("li");
            let link = document.createElement("a");
            link.textContent = n.textContent;

            listItem.appendChild(link);
            listItem.setAttribute("href", "#doclink" + headCount);
            toc.appendChild(listItem);

            headCount++;
      }
    }
