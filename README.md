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

### Screenshot
1. ![ui](https://github.com/royabhi647/Tax-calculator/assets/98969290/5d6ee241-5ad7-4396-936f-1d4fd0b85b66)
2. ![tooltip-information](https://github.com/royabhi647/Tax-calculator/assets/98969290/b6303959-345e-48a4-a0f4-98a2ff2798ed)
3. ![error-tooltip-information](https://github.com/royabhi647/Tax-calculator/assets/98969290/795827a7-2700-4805-acd3-da1975bce4c0)
4. ![all required](https://github.com/royabhi647/Tax-calculator/assets/98969290/20ba0b4d-12ed-4ead-92ea-efea010e8ac9)
5. ![age-filed-missing](https://github.com/royabhi647/Tax-calculator/assets/98969290/b1301df1-be6a-4b9b-a83e-61a13bb86cc7)
6. ![no-tax](https://github.com/royabhi647/Tax-calculator/assets/98969290/f48bb0a9-c8b0-40ca-a45e-dbfd8df413e6)
7. ![no-tax-result](https://github.com/royabhi647/Tax-calculator/assets/98969290/935b27fe-92e7-48ca-82c2-7b28499a278c)
8. ![with-tax](https://github.com/royabhi647/Tax-calculator/assets/98969290/6ab4b783-f332-4bee-ac74-435fd9483a70)
9. ![with-tax-result](https://github.com/royabhi647/Tax-calculator/assets/98969290/3278e63f-a8ba-4849-961c-bf8810d51633)
