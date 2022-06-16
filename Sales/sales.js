"use strict";

// // Stores the min/max hourly customers, and the average cookies per customer, in object properties

// // Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// // Store the results for each location in a separate array… perhaps as a property of the object representing that location

// // Display the values of each array as unordered lists in the browser

// // Calculating the sum of these hourly totals; your output for each location should look like this:







const hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const city = [' ','Seattle', 'Tokyo', 'Paris', 'Dubai', 'Lima'];
// Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle 

function City(city, maxCust, minCust, avgCookie) {

    this.city = city;
    this.maxCust = maxCust;
    this.minCust = minCust;
    this.avgCookie= avgCookie;
    this.customersPerHour = [];
    this.cookiesPerHour = [];
    this.totalDailyCookies = 0;

    // customer count per hour function
    this.customerCountPerHours = function () {
        for (let i = 0; i < hours.length; i++) {
            this.customersPerHour.push(
                Math.floor(Math.random(this.minCust - this.maxCust + 1) * this.minCust));

        }
    }

    // customer cookie per hour function
    this.cookiesCountPerHour = function () {
        for (let i = 0; i < hours.length; i++) {
            this.customerCookiePerHour = Math.ceil(this.customersPerHour[i] * this.avgCookie);
            this.cookiesPerHour.push(
                this.customerCookiePerHour);

        }
    }
}



let Seattle = new City('Seattle', 65, 23, 6.3);
Seattle.customerCountPerHours();
console.log(Seattle.customersPerHour);
Seattle.cookiesCountPerHour();
console.log(Seattle.cookiesPerHour);
console.log(Seattle);


let salesTable = document.getElementById('salesTable');
let tableHeaderContainer = document.createElement('thead');
let tableBody = document.createElement('tbody');
let tableHeaderElement = document.createElement('th');
let tableRow = document.createElement('tr');
let tableData = document.createElement('td');




function citySideBar(){
   for (let i = 0; i < city.length; i++){
    let tableRow = document.createElement('tr');
    let tableData = document.createElement('td');
    tableData.textContent = `${city[i]}`;

    tableRow.append(tableData);
    salesTable.append(tableRow);
}
}
citySideBar();

// TABLE HEADER TABLE HEADER TABLE HEADER TABLE HEADER TABLE HEADER TABLE HEADER TABLE HEADER TABLE HEADER TABLE HEADER 

function renderTableHeader() {
    // go through each name in the array
    for (let i = 0; i < hours.length; i++) {

        tableHeaderElement = document.createElement('th');
        tableHeaderElement.textContent = `${hours[i]}`;
       
        tableRow.append(tableHeaderElement); //attching the tableHeaderEleent to the tableRow
        tableHeaderContainer.append(tableRow);
        salesTable.append(tableHeaderContainer); //attaching tableheadcontainer to the table
    }
}
renderTableHeader();

// SEATTLE SEATTLE SEATTLE SEATTLE SEATTLE SEATTLE SEATTLE SEATTLE SEATTLE SEATTLE SEATTLE SEATTLE SEATTLE SEATTLE SEATTLE SEATTLE SEATTLE SEATTLE 

function renderTableSeattle(){
    let tableRow = document.createElement('tr');

    for (let i = 0; i < hours.length; i++) {
       
        let tableData = document.createElement('td');
        tableData.textContent = `${Seattle.cookiesPerHour[i]}`;
        tableRow.append(tableData);
        salesTable.append(tableRow);
    }
}
renderTableSeattle();

// TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO 

let Tokyo = new City('Tokyo', 24, 3, 1.2);
Tokyo.customerCountPerHours();
console.log(Tokyo.customersPerHour);
Tokyo.cookiesCountPerHour();
console.log(Tokyo.cookiesPerHour);
console.log(Tokyo);

function renderTableTokyo(){
    let tableRow = document.createElement('tr');
    for (let i = 0; i < hours.length; i++) {

        let tableData = document.createElement('td');
        tableData.textContent = `${Tokyo.cookiesPerHour[i]}`;
        tableRow.append(tableData);
        salesTable.append(tableRow);
    }
}
renderTableTokyo();

// DUBAI DUBAI DUBAI DUBAI DUBAI DUBAI DUBAI DUBAI DUBAI DUBAI DUBAI DUBAI DUBAI DUBAI DUBAI DUBAI DUBAI DUBAI DUBAI DUBAI DUBAI DUBAI DUBAI DUBAI 

let Dubai = new City('Dubai', 38, 11, 3.7);
Dubai.customerCountPerHours();
console.log(Dubai.customersPerHour);
Dubai.cookiesCountPerHour();
console.log(Dubai.cookiesPerHour);
console.log(Dubai);

function renderTableDubai(){
    let tableRow = document.createElement('tr');
    for (let i = 0; i < hours.length; i++) {
        let tableData = document.createElement('td');
        tableData.textContent = `${Dubai.cookiesPerHour[i]}`;
        tableRow.append(tableData);
        salesTable.append(tableRow);
    }
}
renderTableDubai();

// PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS 

let Paris = new City('Paris', 38, 20, 2.3);
Paris.customerCountPerHours();
console.log(Paris.customersPerHour);
Paris.cookiesCountPerHour();
console.log(Paris.cookiesPerHour);
console.log(Paris);

function renderTableParis(){
    let tableRow = document.createElement('tr');
    for (let i = 0; i < hours.length; i++) {
        let tableData = document.createElement('td');
        tableData.textContent = `${Paris.cookiesPerHour[i]}`;
        tableRow.append(tableData);
        salesTable.append(tableRow);
    }
}
renderTableParis();

// LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA 

let Lima = new City('Paris', 38, 20, 2.3);
Lima.customerCountPerHours();
console.log(Lima.customersPerHour);
Lima.cookiesCountPerHour();
console.log(Lima.cookiesPerHour);
console.log(Lima);

function renderTableLima(){
    let tableRow = document.createElement('tr');
    for (let i = 0; i < hours.length; i++) {
        let tableData = document.createElement('td');
        tableData.textContent = `${Lima.cookiesPerHour[i]}`;
        tableRow.append(tableData);
        salesTable.append(tableRow);
    }
}
renderTableLima();

// TOTAL TOTAL TOTAL TOTAL TOTAL TOTAL TOTAL TOTAL TOTAL TOTAL TOTAL TOTAL TOTAL TOTAL TOTAL TOTAL TOTAL TOTAL TOTAL TOTAL 

let tableFooter = document.createElement('tfoot');


function renderTableFooter(){
    let tableRow = document.createElement('tr')
     for (let i = 0; i < hours.length; i++){
        let hourTotalMath = 0;
        // going to add the total per hour
        this.hourTotal = [];
        this.hourTotal.push = (hourTotalMath += hours[i]);
        // trying to put the hour total into a table element
        tableHeaderElement = document.createElement('th');
        tableHeaderElement.textContent = `${hoursTotal[i]}`;
        
       
        tableRow.append(tableHeaderElement); 
        tableFooter.append(tableRow);
        salesTable.append(tableFooter); 
    }
    
}
console.log(hourTotal[i]);
renderTableFooter();