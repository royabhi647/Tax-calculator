/**
 * @description apply all the javascript after the DOM content loaded
 */
document.addEventListener("DOMContentLoaded", function () {
  
  /**
   * @description the following function validates the value of the inputElement and toggles the errorElement accordingly
   * @param {HTMLInputEvent} event input event
   * @param {HTMLInputElement} inputElement 
   * @param {HTMLParagraphElement} errorElement 
   */
  function handleError(event, inputElement, errorElement){
    if (isNaN(inputElement.value)) {
      errorElement.classList.remove("opacity-0");
    } else {
      errorElement.classList.add("opacity-0");
    }
  }

  // references to grossIncome input element and error element
  const grossIncome = document.getElementById("grossIncome");
  const error_grossIncome = document.querySelector(".error_grossIncome");
  
  /**
   * @description eventListner for input for grossIncome
   */
  grossIncome.addEventListener("input", (e) => {
    handleError(e,grossIncome,error_grossIncome);
  });
  
  // references to extraIncome input element and error element
  const extraIncome = document.getElementById("extraIncome");
  const error_extraIncome = document.querySelector(".error_extraIncome");
  /**
   * @description eventListner for input for extraIncome
   */
  extraIncome.addEventListener("input", (e) => {
    handleError(e,extraIncome,error_extraIncome);
  });
  
  // references to deduction input element and error element
  const deductions = document.getElementById("deductions");
  const error_deductions = document.querySelector(".error_deductions");
  /**
   * @description eventListner for input for deductions
   */
  deductions.addEventListener("input", (e) => {
    handleError(e,deductions,error_deductions);
  });

  /**
   * @description eventlistner for click event for submit button 
   */
  document
    .getElementById("calculateTax")
    .addEventListener("click", function () {
      // Clear any previous error messages
      document.getElementById("errorContainer").innerHTML = "";

      // Gather input values
      const grossIncome = parseFloat(
        document.getElementById("grossIncome").value
      );
      const extraIncome = parseFloat(
        document.getElementById("extraIncome").value
      );
      const deductions = parseFloat(
        document.getElementById("deductions").value
      );
      const ageGroup = document.getElementById("ageGroup").value;

      // Simple validation
      if (
        isNaN(grossIncome) ||
        isNaN(extraIncome) ||
        isNaN(deductions) ||
        ageGroup === ""
      ) {
        document.getElementById("errorContainer").innerHTML =
          "Please enter all fields correctly and age group is mandatory";
        let timeoutId = setTimeout(() => {
          document.getElementById("errorContainer").innerHTML = "";
          clearTimeout(timeoutId);
        }, 2000);
        return;
      }

      // Calculate total taxable income
      const taxableIncome = Math.max(
        0,
        grossIncome + extraIncome - deductions - 800000
      );

      // Tax rates by age group
      const taxRates = {
        under40: 0.3,
        between40and60: 0.4,
        over60: 0.1,
      };

      // Calculate the tax based on age group and taxable income
      const taxDue = taxableIncome * (taxRates[ageGroup] || 0);

      // Display the result in the modal
      document.getElementById("resultText").innerText = ` ${
        (grossIncome + extraIncome - deductions - taxDue).toLocaleString()
      } `;
      document.getElementById("taxModal").style.display = "block";
    });

  // Close modal when clicking on <span> (x)
  document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("taxModal").style.display = "none";
  });

  // Close modal when clicking anywhere outside of the modal
  window.onclick = function (event) {
    const modal = document.getElementById("taxModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
