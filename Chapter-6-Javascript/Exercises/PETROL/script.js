// Selecting elements
const costPerLiterInput = document.getElementById('costPerLiter');
const litersPurchasedInput = document.getElementById('litersPurchased');
const calculateButton = document.getElementById('calculateButton');
const totalCostOutput = document.getElementById('costResult');

// Setting default values
costPerLiterInput.defaultValue = 1.72;
litersPurchasedInput.defaultValue = 0;

// Event listener for the Calculate button
calculateButton.addEventListener('click', calculateTotalCost);

// Function to calculate the total cost
function calculateTotalCost() {
  const costPerLiter = parseFloat(costPerLiterInput.value);
  const litersPurchased = parseFloat(litersPurchasedInput.value);
  const totalCost = costPerLiter * litersPurchased;
  totalCostOutput.textContent = totalCost.toFixed(2);
}
