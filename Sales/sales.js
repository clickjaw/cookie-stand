"use strict";

// // Stores the min/max hourly customers, and the average cookies per customer, in object properties

// // Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// // Store the results for each location in a separate array… perhaps as a property of the object representing that location

// // Display the values of each array as unordered lists in the browser

// // Calculating the sum of these hourly totals; your output for each location should look like this:

const hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle Seattle 

let Seattle = {

    maxCust: 65,
    minCust: 23,
    avgCookie: 6.3,
    customersPerHour: [],
    cookiesPerHour: [],
    totalDailyCookies: 0,

    customerCountPerHours: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customersPerHour.push(
                Math.floor(Math.random(this.minCust - this.maxCust + 1) * this.minCust));
        }
        return this.customersPerHour;

    },

    cookiesCountPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            
                let customerCookiePerHour = Math.ceil(this.customersPerHour[i] * this.avgCookie);

                this.cookiesPerHour.push(
            this.totalDailyCookies += customerCookiePerHour);

            return this.totalDailyCookies;
        }

    },

}

console.log(Seattle.customerCountPerHours());
console.log(Seattle.cookiesCountPerHour());

let CookieCount = document.getElementById('CookieCount')
let cookieContainer = document.getElementById('cookieHours');
let ul = document.createElement('ul');


function render(hours) {
    // rendering the hours AND COOKIES
    for (let i = 0; i < hours.length; i++) {

        //     create a list Element
        let li = document.createElement('li');
        li.textContent = `${hours[i]}`
        //     append list to ul

        ul.append(li);
    }
    
    cookieContainer.append(ul); //adding ul to our div
}

function render(cookiesCountPerHour){
    
    for(let i = 0; i < hours.length; i++){
    let li = document.createElement('li');
    li.textContent = `${cookiesCountPerHour[i]}`
    ul.append(li);
}
    CookieCount.append(ul);
}
render(hours);
render(Seattle.cookiesCountPerHour());

// TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO TOKYO

let Tokyo = {

    maxCust: 24,
    minCust: 3,
    avgCookie: 1.2,
    customersPerHour: [],
    cookiesPerHour: [],
    totalDailyCookies: 0,

    customerCountPerHours: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customersPerHour.push(
                Math.floor(Math.random(this.minCust - this.maxCust + 1) * this.minCust));
        }
        return this.customersPerHour;

    },

    cookiesCountPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            
                let customerCookiePerHour = Math.ceil(this.customersPerHour[i] * this.avgCookie);

                this.cookiesPerHour.push(
            this.totalDailyCookies += customerCookiePerHour);

            return this.totalDailyCookies;
        }

    },

}

console.log(Tokyo.customerCountPerHours());
console.log(Tokyo.cookiesCountPerHour());




// Dubai Dubai Dubai Dubai Dubai Dubai Dubai Dubai Dubai Dubai Dubai Dubai Dubai Dubai Dubai Dubai Dubai Dubai Dubai Dubai Dubai Dubai Dubai Dubai

let Dubai = {

    maxCust: 38,
    minCust: 11,
    avgCookie: 3.7,
    customersPerHour: [],
    cookiesPerHour: [],
    totalDailyCookies: 0,

    customerCountPerHours: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customersPerHour.push(
                Math.floor(Math.random(this.minCust - this.maxCust + 1) * this.minCust));
        }
        return this.customersPerHour;

    },

    cookiesCountPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            
                let customerCookiePerHour = Math.ceil(this.customersPerHour[i] * this.avgCookie);

                this.cookiesPerHour.push(
            this.totalDailyCookies += customerCookiePerHour);

            return this.totalDailyCookies;
        }

    },

}

console.log(Dubai.customerCountPerHours());
console.log(Dubai.cookiesCountPerHour());

// PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS PARIS

let Paris = {

    maxCust: 38,
    minCust: 20,
    avgCookie: 2.3,
    customersPerHour: [],
    cookiesPerHour: [],
    totalDailyCookies: 0,

    customerCountPerHours: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customersPerHour.push(
                Math.floor(Math.random(this.minCust - this.maxCust + 1) * this.minCust));
        }
        return this.customersPerHour;

    },

    cookiesCountPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            
                let customerCookiePerHour = Math.ceil(this.customersPerHour[i] * this.avgCookie);

                this.cookiesPerHour.push(
            this.totalDailyCookies += customerCookiePerHour);

            return this.totalDailyCookies;
        }

    },

}

console.log(Paris.customerCountPerHours());
console.log(Paris.cookiesCountPerHour());

// LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA LIMA

let Lima = {

    maxCust: 16,
    minCust: 2,
    avgCookie: 4.6,
    customersPerHour: [],
    cookiesPerHour: [],
    totalDailyCookies: 0,

    customerCountPerHours: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customersPerHour.push(
                Math.floor(Math.random(this.minCust - this.maxCust + 1) * this.minCust));
        }
        return this.customersPerHour;

    },

    cookiesCountPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            
                let customerCookiePerHour = Math.ceil(this.customersPerHour[i] * this.avgCookie);

                this.cookiesPerHour.push(
            this.totalDailyCookies += customerCookiePerHour);

            return this.totalDailyCookies;
        }

    },

}

console.log(Lima.customerCountPerHours());
console.log(Lima.cookiesCountPerHour());