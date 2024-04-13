## Tax Calculation Web App
This project implements a web application for calculating taxes based on user input. It follows specific guidelines and requirements outlined below.

### Guidelines and Requirements
* Tax calculation is based on the provided formula:
   - If overall income (after deductions) is under 8 Lakhs, no tax is applied.
   - Income over 8 Lakhs is taxed according to age groups:
       - 30% for age < 40
       - 40% for age ≥ 40 but < 60
       - 10% for age ≥ 60
* Users should not be restricted from entering incorrect values.
* Error handling:
   - Incorrect input values are highlighted with an error icon.
   - Age dropdown field is mandatory, and an error icon appears if not selected.
* Error icons are not visible by default.
* Clicking on submit shows a modal with final calculated values.

### Local Setup
To run the application locally:

1. Clone the repository:
<pre>git clone https://github.com/royabhi647/Tax-calculator</pre>

2. Open the project directory
<pre>cd tax-calculator</pre>

3. Open the `index.html` file in web browser.

### Usage
   - Enter gross annual income, extra income, and deductions.
   - Select age group from the dropdown.
   - Click submit to calculate taxes.

### Testing
   - No automated tests provided.
   - Manual testing required for all functionalities.

### [live preview](https://main--abhi-tax-calculator.netlify.app/)