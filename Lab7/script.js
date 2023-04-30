"use strict";
/*    JavaScript 7th Edition
      Chapter 7

      Project to create a customer queue
      Author: Denzel Udemba   
      Date:   04/30/2023

      
*/

let customers = ["Alisha Jordan","Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                 "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                 "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                 "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                 "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                 "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                 "Wesley Cho"];

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let statusMessage = document.getElementById("status");

generateCustomerList();


// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
   customerList.innerHTML = "";
   for (let i = 0; i < customers.length; i++) {
      let customerItem = document.createElement("li");      
      customerItem.textContent = customers[i];     
      customerList.appendChild(customerItem);
   }
}

// Add event listener for addButton click
addButton.addEventListener("click", function() {
   // Check if customer already exists in the array
   if (customers.includes(customerName.value)) {
      statusMessage.textContent = `${customerName.value} is already in the queue`;
   } else {
         // Add new customer to array
         customers.push(customerName.value);
      
         // Update customer list on page
         generateCustomerList();
      
         // Display status message
         statusMessage.textContent = `${customerName.value} added to the end of the queue`;
      
         // Clear input field
         customerName.value = "";
   }
 });

//Add event listener for removeButton click
removeButton.onclick = function() {
   let index = customers.indexOf(customerName.value);
   if (index !== -1) {
      customers.splice(index, 1);
      statusMessage.textContent = `Customer ${customerName.value} removed from the queue`;

      generateCustomerList();
   } else {
      statusMessage.textContent = `Customer ${customerName.value} is not found in the queue`;
   }
   customerName.value = "";
};


//Add an event listener for searchButton 
searchButton.addEventListener("click", function(){
   //index of method to locate the index of the array (what position it is)
   let customerPositionIndex = customers.indexOf(customerName.value) + 1;
   //if case checks if the index position matches the customer name in array
   if (customerPositionIndex === 0) {

      statusMessage.textContent = customerName.value + " is not found in the array :/";
   }
   else {

      statusMessage.textContent = customerName.value + ` was found in slot  ${customerPositionIndex}  of the queue :)`;
   }
});

// Add event listener for topButton click
topButton.addEventListener("click", function() {
   // Remove top customer from array and store in topCustomer variable
   let topCustomer = customers.shift();
   
   // Display status message
   statusMessage.textContent = "Removed top customer from the queue: " + topCustomer;
   
   // Update customer list on page
   generateCustomerList();
});

