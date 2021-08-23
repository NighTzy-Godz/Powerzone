const headerToggler = document.querySelector("#openHeader");

// HEAD NAVBAR
headerToggler.addEventListener("click", () => {
  let headerHide = document.querySelector(".headerHide");

  headerHide.classList.toggle("headerShow");
});

// -----------------  BMI CALCULATOR ----------------------

// TO AVOID LETTERS
function letter(input) {
  var regex = /[^0-9.]/gi;
  input.value = input.value.replace(regex, "");
}

function getValue() {
  // BMI BACKGROUND
  let bmi = document.querySelector(".bmi");

  // WEIGHT
  let setWeight = document.querySelector("#weight").value;
  let newWeight = parseFloat(setWeight);

  // HEIGHT
  let setHeight = document.querySelector("#height").value;
  let newHeight = parseFloat(setHeight);

  // BMI ELEMTS TO CHANGE COLORS
  let indicator = document.querySelector("#indicate");
  let bmiDesc = document.querySelector(".bmiDesc");

  let bmihead = document.querySelector("#bmih1");
  let bmispan = document.querySelector("#bmispan");

  // COMPUTATION

  let semiBmi = (newWeight / (newHeight * newHeight)) * 10000;
  let newBmi = semiBmi.toFixed(1);

  console.log(newBmi);

  // UNDERWEIGHT
  if (newBmi < 18.5) {
    bmi.style.backgroundColor = "#86b0e1";
    indicator.innerHTML = "STATUS: UNDERWEIGHT";
    indicator.style.color = "white";
    bmihead.style.color = "white";
    bmispan.style.color = "white";
    bmiDesc.style.color = "#121212";
  }
  // NORMAL
  if (newBmi > 18.5) {
    bmi.style.backgroundColor = "#c1e999";
    indicator.innerHTML = "STATUS: NORMAL";
    indicator.style.color = "#1c2d3b";
    bmihead.style.color = "#1c2d3b";
    bmispan.style.color = "#1c2d3b";
    bmiDesc.style.color = "#121212";
  }
  // OVERWEIGHT
  if (newBmi > 25) {
    bmi.style.backgroundColor = "#f2da7f";
    indicator.innerHTML = "YOUR STATUS: OVERWEIGHT";
    indicator.style.color = "#1c2d3b";
    bmihead.style.color = "#1c2d3b";
    bmispan.style.color = "#1c2d3b";
    bmiDesc.style.color = "#121212";
  }
  // OBESE
  if (newBmi > 30) {
    bmi.style.backgroundColor = "#f2785b";
    indicator.innerHTML = "STATUS: OBESE";
    indicator.style.color = "rgba(255, 255, 255, 0.795)";
    bmihead.style.color = "rgba(255, 255, 255, 0.795)";
    bmispan.style.color = "rgba(255, 255, 255, 0.795)";
  }
  // EXTREMELY OBESE
  if (newBmi > 35) {
    bmi.style.backgroundColor = "#ec8688";
    indicator.innerHTML = "STATUS: EXTREMELY OBESE";
  }
}

function reset() {
  let bmiDesc = document.querySelector(".bmiDesc");
  let indicator = document.querySelector("#indicate");
  let bmihead = document.querySelector("#bmih1");
  let bmi = document.querySelector(".bmi");
  let setWeight = (document.querySelector("#weight").value = "");
  let setHeight = (document.querySelector("#height").value = "");

  bmi.style.backgroundColor = "#121212";
  indicator.innerHTML = "YOUR STATUS";
  indicator.style.color = "var(--red)";
  bmihead.style.color = "var(--red)";
  bmiDesc.style.color = "rgba(255, 255, 255, 0.795)";
}

// green #c1e999
// blue #86b0e1
// yellow #f2da7f
// red #ec8688
// orange #f2785b
