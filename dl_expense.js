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
      var changingCells = document.querySelectorAll('input[class="sum"]');

      // Will loop through the changingCells collection and run the calcExp function when the user changes its focus
      for (var i = 0; i < changingCells.length; i++) {
            changingCells[i].onchange = calcExp;
      }
      // changingCells.onchange = calcExp;
      document.getElementById("submitButton").onclick = validateSummary;
}

function validateSummary() {
      var summary = document.getElementById("summary");

      // This if else statement will display a custom message that will display if the user forgets to type something in the text box
      if (summary.validity.valueMissing) {
            summary.setCustomValidity("You must include a summary of the trip in your report.")
      } else {
            summary.setCustomValidity("");
      }
}

function calcClass(sumClass) {
      var sumFields = document.getElementsByClassName("sumClass");
      var sumTotal = 0;

      for (var i = 0; i < sumFields.length; i++) {
            var itemValue = parseFloat(sumFields[i].value);
            if (!isNaN(itemValue)) {
                  itemValue += itemValue;
            }
      }
      return sumTotal;
}

function calcExp() {
      var expTable = document.querySelectorAll("table#travelExp tbody tr");
      for (var i = 0; i < expTable.length; i++) {

      }
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