// Hämta elementen
const colorInput = document.getElementById("color");
const contentInput = document.getElementById("content");
const divStyleCheckbox = document.getElementById("divStyle"); // Lägg till variabel för checkboxen från html
const button = document.getElementById("myButton");
const divElement = document.getElementById("myDiv");

console.log("Elements initialized."); // Log initialization

// Funktion för att uppdatera displayen
function updateDisplay() {
  const colorValue = colorInput.value;
  const contentValue = contentInput.value;
  const isCheckboxChecked = divStyleCheckbox.checked; // Kontrollera om checkboxen är ikryssad

  console.log("Updating display:", colorValue, contentValue, isCheckboxChecked); // Log values

  // Kontrollera om checkboxen är ikryssad och om båda fälten är ifyllda
  if (isCheckboxChecked && colorValue && contentValue) {
    // Om ja, uppdatera divElement med färg och text
    divElement.style.backgroundColor = colorValue;
    divElement.innerHTML = contentValue;
    divElement.style.color = "white"; // Sätt en textfärg som kontrasterar mot bakgrunden
    console.log("Div updated with color and content"); // Log update
  }
}

// Rensa funktion
function clearFields() {
  // Rensa fälten
  colorInput.value = "";
  contentInput.value = "";

  // Återställ divElement
  divElement.style.backgroundColor = "transparent";
  divElement.innerHTML = "";
  divElement.style.color = "black"; // Eller standardtextfärgen
  divStyleCheckbox.checked = false; // Avmarkera checkboxen

  console.log("Fields cleared"); // Log clear action
}

// Eventlyssnare för textfälten och checkboxen
colorInput.addEventListener("input", updateDisplay);
contentInput.addEventListener("input", updateDisplay);
divStyleCheckbox.addEventListener("change", updateDisplay); // Uppdatera när checkboxen ändras
console.log("Event listeners added for inputs and checkbox"); // Log event listener addition

// Eventlyssnare för knappen
button.addEventListener("click", clearFields);
console.log("Event listener added for button"); // Log event listener addition

// Background rgb
function generateRandomColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  console.log("Generated random color:", randomColor);
  return randomColor;
}

function updateGlow() {
  const form = document.querySelector("form");
  const newColor = generateRandomColor();
  form.style.boxShadow = `0 0 10px 5px ${newColor}`;
  console.log("Updated form glow with new color"); // Log glow update
}

setInterval(updateGlow, 1100);
console.log("Set interval for updating form glow");
