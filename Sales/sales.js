"use strict";

// // Stores the min/max hourly customers, and the average cookies per customer, in object properties

// // Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// // Store the results for each location in a separate array… perhaps as a property of the object representing that location

// // Display the values of each array as unordered lists in the browser

// // Calculating the sum of these hourly totals; your output for each location should look like this:

const hours = ['','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const city = ['Seattle', 'Tokyo', 'Paris', 'Dubai', 'Lima'];
// Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle 

function City (city,maxCust,minCust){

    this.city = city;
    this.maxCust = maxCust;
    this.minCust = minCust;
    this.customersPerHour = [];
    this.cookiesPerHour = [];
    this.totalDailyCookies = 0;
    this.avgCookie = 6.3;

    // customer count per hour function
    this.customerCountPerHours = function(){
        for (let i = 0; i < hours.length; i++) {
            this.customersPerHour.push(
                Math.floor(Math.random(this.minCust - this.maxCust + 1) * this.minCust));
        
        }
    }

    // customer cookie per hour function
    this.cookiesCountPerHour = function(){
        for (let i = 0; i < hours.length; i++) {
                let customerCookiePerHour = Math.ceil(this.customersPerHour[i] * this.avgCookie);
            this.cookiesPerHour.push(
            this.totalDailyCookies += customerCookiePerHour);

            
        }

    }
 
}

// Seattle.customerCountPerHours();
// render(hours);






let Seattle = new City('Seattle', 65, 23);
Seattle.customerCountPerHours();
console.log(Seattle.customersPerHour)
Seattle.cookiesCountPerHour();
console.log(Seattle.cookiesPerHour);
console.log(Seattle)

let salesTable = document.getElementById('salesTable');

let tableHeaderContainer = document.createElement('thead');
let tableHeaderElement = document.createElement('th');
let tableRow = document.createElement('tr');
let tableData = document.createElement('td');

function renderTableHeader(){
    // go through each name in the array
    for( let i = 0; i < hours.length; i++){

        tableHeaderElement = document.createElement('th');  //create a row
        tableHeaderElement.textContent = `${hours[i]}`;

        
        // tableHeaderElement.textContent = `${}`

        // tableRow = document.createElement('tr'); THIS ONE MAKES ROWS FOR SALMON SALES
        tableRow.append(tableHeaderElement); //attching the tableHeaderEleent to the tableRow
        tableHeaderContainer.append(tableRow); //attaching to table row to the THC
        salesTable.append(tableHeaderContainer); //attaching tableheadcontainer to the table
        
    }

    for (let i = 0; i < city.length; i++){
        tableRow = document.createElement('tr');
        tableData = document.createElement('td');
        tableData.textContent = `${city[i]}`;

        tableRow.append(tableData);
        // tableRow.append(tableHeaderElement);
        salesTable.append(tableRow);
        // hoursTable.append(tableHeaderContainer);
    }
    for (k = 0; k < hours.length; k++){
        tableRow = document.createElement('tr');
        tableRow = [];

        tableRow.append(tableHeaderElement);
        tableHeaderContainer.append(tableRow);
        salesTable.append(tableHeaderContainer);

    }
    
}
// let colorTable = document.getElementById("colorTable");

renderTableHeader();






// let Seattle = {

//     maxCust: 65,
//     minCust: 23,
//     avgCookie: 6.3,
//     customersPerHour: [],
//     cookiesPerHour: [],
//     totalDailyCookies: 0,

//     customerCountPerHours: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customersPerHour.push(
//                 Math.floor(Math.random(this.minCust - this.maxCust + 1) * this.minCust));
//         }
//         return this.customersPerHour;

//     },

//     cookiesCountPerHour: function () {
//         for (let i = 0; i < hours.length; i++) {
            
//                 let customerCookiePerHour = Math.ceil(this.customersPerHour[i] * this.avgCookie);

//                 this.cookiesPerHour.push(
//             this.totalDailyCookies += customerCookiePerHour);

//             return this.totalDailyCookies;
//         }

//     },

// }

// console.log(Seattle.customerCountPerHours());
// console.log(Seattle.cookiesCountPerHour());


// let seattleHeader = document.createElement('header');
// seattleHeader.textContent = "Seattle Sales";

// let CookieCount = document.getElementById('CookieCount')
// let cookieContainer = document.getElementById('cookieHours');
// let ul = document.createElement('ul');
// ul.append(seattleHeader);



// function render(hours) {
//     // rendering the hours AND COOKIES
//     for (let i = 0; i < hours.length; i++) {

//         //     create a list Element
//         let li = document.createElement('li');
//         li.textContent = `${hours[i]}: ${Seattle.customersPerHour[i]}`
//         //     append list to ul

//         ul.append(li);

//         // let totalLi = document.createElement('li');
//         // totalLi.textContent = 
//     }
    
//     cookieContainer.append(ul); //adding ul to our div
// }

// // Seattle.customerCountPerHours();
// // render(hours);

// let seattleTable = document.getElementById('seattleTable');
// let tableHeaderContainer = document.createElement('thead');
// let tableHeaderElement = document.createElement('th');
// let tableRow = document.createElement("tr");


// function renderSeattleSalesTable(hours){
//     for (let i = 0; i < hours.length; i++){
//         let tableData = document.createElement('td');

//         tableHeaderElement.textContent = `${hours}: ${Seattle.customersPerHour[i]}`;
//         tableRow.append(tableHeaderElement);
//         tableHeaderContainer.append(tableRow);
//         seattleTable.append(tableHeaderContainer);
        
//     }
//     seattleTable.append(tableHeaderElement);
// }
// render(hours);
// renderSeattleSalesTable();






