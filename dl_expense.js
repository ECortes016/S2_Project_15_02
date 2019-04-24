"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 2

      Author: Emmanuel Cortes Castaneda
      Date: 4.18.19
   
   Filename: dl_expenses.js
   
   Function List
   =============
   
   validateSummary()
      Validates the data entry in the summary field.
   
   calcClass(sumClass)
      Sums up all of the data values for elements of the sumClass class.
      
   calcExp()
      Calculates the travel expenses from all categories and dates.
      
   formatNumber(val, decimals)
      Formats the value, "val" to the number of decimals indicated 
      by "decimals", adding thousands separators.
      
   formatUSCurrency(val)
      Formats the value, "val", as U.S. currency.
      
*/

window.onload = function () {
      // Gathers all of the input elements that have the word 'sum' inside of the class attribute
      var changingCells = document.querySelectorAll("table#travelExp input.sum");

      // Will loop through the changingCells collection and run the calcExp function when the user changes its focus
      for (var i = 0; i < changingCells.length; i++) {
            changingCells[i].onchange = calcExp;
      }
      // changingCells.onchange = calcExp;
      document.getElementById("submitButton").onclick = validateSummary;
}

function validateSummary() {
      // This variable will store the text box 
      var summary = document.getElementById("summary");
      // This if else statement will display a custom message that will display if the user forgets to type something in the text box
      if (summary.validity.valueMissing) {
            // If the user forgets to fill out the text box then this message will appear
            summary.setCustomValidity("You must include a summary of the trip in your report.")
      } else {
            // If the user fills out the text box then no message will show up
            summary.setCustomValidity("");
      }
}

function calcClass(sumClass) {
      // This variable will store all elements within the sumClass 
      var sumFields = document.getElementsByClassName(sumClass);
      // Set to an initial value of 0
      var sumTotal = 0;

      for (var i = 0; i < sumFields.length; i++) {
            var itemValue = parseFloat(sumFields[i].value);
            // This if statement will determine if the itemValue variable is not not a number
            if (!isNaN(itemValue)) {
                  // If the itemValue value is a digit the the itemValue value will be added onto the sumTotal value
                  sumTotal += itemValue;
            }
      }
      return sumTotal;
}

function calcExp() {
      // Will store all of the table row elements within the table
      var expTable = document.querySelectorAll("table#travelExp tbody tr");
      for (var i = 0; i < expTable.length; i++) {
            document.getElementById("subtotal" + i).value = formatNumber(calcClass("date" + i), 2);
      }

      // All of the following code will grab the elements value and set it equal to a number based on the formatNumber function
      document.getElementById("transTotal").value = formatNumber(calcClass("trans"), 2);
      document.getElementById("lodgeTotal").value = formatNumber(calcClass("lodge"), 2);
      document.getElementById("mealTotal").value = formatNumber(calcClass("meal"), 2);
      document.getElementById("otherTotal").value = formatNumber(calcClass("other"), 2);
      document.getElementById("expTotal").value = formatUSCurrency(calcClass("sum"));
}

function formatNumber(val, decimals) {
      return val.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
      });
}

function formatUSCurrency(val) {
      return val.toLocaleString('en-US', {
            style: "currency",
            currency: "USD"
      });
}