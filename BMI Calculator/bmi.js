function calculateBMI() {
    // Getting weight and height from the input fields
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;

    // Checks the input values to see if they are valid numbers Alerts if not valid
    if (isNaN(weight) || isNaN(height) || weight === 0 || height === 0) {
        document.getElementById("result").innerText = "Please Enter Valid Values!";
        return;
    }
    // Calculation of BMI
    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById("bmi").innerText = bmi;

    // Function for displaying the category you fall under
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi <30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("category").innerText = category;
}