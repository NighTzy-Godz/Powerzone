// ---------------------------------------------------------- GlOBAL FUNCTIONS -----------------------------------------------------------

// ---------------TO AVOID LETTERS
function letter(input) {
  var regex = /[^0-9.]/gi;
  input.value = input.value.replace(regex, "");
}

// ---------------INPUT RESETS
function inputReset() {
  let setWeight = document.querySelectorAll(".weight");
  for (let items of setWeight) {
    items.value = "";
  }

  // HEIGHT
  let setHeight = document.querySelectorAll(".height");
  for (let items of setHeight) {
    items.value = "";
  }
}

// --------- INPUT VALUES
function inputValue() {
  // WEIGHT
  let setWeight = document.querySelectorAll(".weight");
  for (let items of setWeight) {
    var newWeight = parseFloat(items.value);
  }

  // HEIGHT
  let setHeight = document.querySelectorAll(".height");
  for (let items of setHeight) {
    var newHeight = parseFloat(items.value);
  }

  return [newHeight, newWeight];
}

// --- GETTING THE VALUE FROM BMI INPUTS
function getValue() {
  let newBmi = null;
  let inputValues = inputValue();
  let newHeight = inputValues[0];
  let newWeight = inputValues[1];

  // COMPUTATION

  let semiBmi = (newWeight / (newHeight * newHeight)) * 10000;
  newBmi = semiBmi.toFixed(1);

  return newBmi;
}

// ---------------------------------------------------------- HEAD NAVBAR ----------------------------------------------------------------
// FOR THE HEADER HAMBURGER BAR
const headerToggler = document.querySelector("#openHeader");

headerToggler.addEventListener("click", () => {
  let headerHide = document.querySelector(".headerHide");

  headerHide.classList.toggle("headerShow");
});

// ---------------------------------------------------------- BMI ------------------------------------------------------------------------------

// SETTING THE BACKGROUND COLOR OF THE IMAGE DEPENDING ON THE BMI SCORE
function bmiSetColor() {
  // BMI BACKGROUND
  let bmi = document.querySelector(".bmi");
  // BMI ELEMTS TO CHANGE COLORS
  let indicator = document.querySelector("#indicate");
  let bmiDesc = document.querySelector(".bmiDesc");

  let bmihead = document.querySelector("#bmih1");
  let bmispan = document.querySelector("#bmispan");

  const newBmi = getValue();

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

// RESETTING THE BMI INPUTS
function bmiReset() {
  inputReset();

  let bmiDesc = document.querySelector(".bmiDesc");
  let indicator = document.querySelector("#indicate");
  let bmihead = document.querySelector("#bmih1");
  let bmi = document.querySelector(".bmi");

  bmi.style.backgroundColor = "#121212";
  indicator.innerHTML = "YOUR STATUS";
  indicator.style.color = "var(--red)";
  bmihead.style.color = "var(--red)";
  bmiDesc.style.color = "rgba(255, 255, 255, 0.795)";
}

// ------------------------------------------------------------------ DIET PAGE----------------------------------------------------------------------

let deitBg = document.querySelector(".diet");
let dietDays = document.querySelectorAll(".dietPickDay");
let dietImg = document.querySelector("#dietImg");
let dietIndicate = document.querySelector("#dietIndicate");
let dietContent = document.querySelector(".dietContent");
let dietRecipe = document.querySelector("#dietRecipe");
let dietTime = document.querySelectorAll(".dietTime");
let dietName = document.querySelector("#dietName");

// ----------- DIET CONFIGURATION ----------------

const dietPlanResult = {
  Overweight: {
    status: "Reduce Food",
    bgColor: "#f2785b",
    day1: {
      breakfast: {
        img: "/Powerzone/images/cerealMilk.jpg",
        dietName: "Wholegrain Cereal and Milk",
        dietRecipe: "1 cup wholegrain flaky cereal + 1 cup skim milk.",
      },
      lunch: {
        img: "/Powerzone/images/chickenSalad.jpg",
        dietName: "Chicken Salad & Roll",
        dietRecipe:
          "½ chicken breast (skin removed) +1 slice reduced fat cheese + 2 cups salad vegetables (eg. lettuce, carrot, tomato, cucumber) + 1 grainy bread roll + 1/4 avocado spread.",
      },
      dinner: {
        img: "/Powerzone/images/beefStirFry.jpg",
        dietName: "Beef Stir Fry",
        dietRecipe:
          "120g lean beef + 1.5 cups cooked vegetables (eg. carrot, mushroom, celery, capsicum, snow peas) + 1 cup cooked brown rice + 2 tsp sesame oil for cooking.",
      },
      dessert: {
        img: "/Powerzone/images/fruitSalad.jpg",
        dietName: "Fruit Salad & Yoghurt:",
        dietRecipe: "1 cup fruit salad + 1 tub low fat yoghurt.",
      },
      snacks: {
        img: "/Powerzone/images/fruits.jpg",
        dietName: "Fruits",
        dietRecipe:
          "1 serving of fruit (eg. medium apple or banana or ¾ cup grapes or 2 tbsp raisins/currants/sultanas or 1 small mango.",
      },
    },
    day2: {
      breakfast: {
        img: "/Powerzone/images/englishMuffins.jpg",
        dietName: "English Muffin and Fruit:",
        dietRecipe:
          "1 wholegrain toast English muffin + ½ tbsp peanut butter + 1 average piece of fruit.",
      },
      lunch: {
        img: "/Powerzone/images/rainbowRice.jpg",
        dietName: "Rainbow Rice Salad",
        dietRecipe:
          "Mix together 90g canned salmon + 1/3 cup chickpeas + reduced fat crumbled feta cheese + 2 cups salad vegetables (eg. capsicum, carrot, snow peas, rocket) + 1 cup cooked brown rice.",
      },
      dinner: {
        img: "/Powerzone/images/omelette.jpg",
        dietName: "Prawn and Kimchi Omelette (1 serve)",
        dietRecipe: "Served with 2 cup salad and 1 slice wholegrain bread.",
      },
      dessert: {
        img: "/Powerzone/images/fruitSmoothie.jpg",
        dietName: "Fruit Smoothie",
        dietRecipe:
          " 1 cup skim milk + 1 serve fruit (eg. 1 medium banana or 2 cups berries).",
      },
      snacks: {
        img: "/Powerzone/images/lowYogurt.jpg",
        dietName: "Low Fat Yogurt",
        dietRecipe:
          "1 tub low fat/no added sugar yoghurt. + 10 nuts (unsalted, raw/dry roasted).",
      },
    },
    day3: {
      img: "/Powerzone/images /cerealMilk.jpg",
      dietName: "Wholegrain Cereal and Milk",
      dietRecipe: "1 cup wholegrain flaky cereal + 1 cup skim milk.",
    },
    day4: {
      img: "/Powerzone/images/cerealMilk.jpg",
      dietName: "Wholegrain Cereal and Milk",
      dietRecipe: "1 cup wholegrain flaky cereal + 1 cup skim milk.",
    },
    day5: {
      img: "/Powerzone/images/cerealMilk.jpg",
      dietName: "Wholegrain Cereal and Milk",
      dietRecipe: "1 cup wholegrain flaky cereal + 1 cup skim milk.",
    },
    day6: {
      img: "/Powerzone/images/cerealMilk.jpg",
      dietName: "Wholegrain Cereal and Milk",
      dietRecipe: "1 cup wholegrain flaky cereal + 1 cup skim milk.",
    },
    day7: {
      img: "/Powerzone/images/cerealMilk.jpg",
      dietName: "Wholegrain Cereal and Milk",
      dietRecipe: "1 cup wholegrain flaky cereal + 1 cup skim milk.",
    },
  },
  Underweight: {
    status: "Gain Food",
    bgColor: "#86b0e1",
    day1: {
      img: "/Powerzone/images/egg.jpg",
      dietName: "---Wholegrain Cereal and Milk--",
      dietRecipe: "--1 cup wholegrain flaky cereal + 1 cup skim milk.--",
    },
    day2: {
      img: "/Powerzone/images/egg.jpg",
      dietName: "---Wholegrain Cereal and Milk--",
      dietRecipe: "--1 cup wholegrain flaky cereal + 1 cup skim milk.--",
    },
    day3: {
      img: "/Powerzone/images/egg.jpg",
      dietName: "---Wholegrain Cereal and Milk--",
      dietRecipe: "--1 cup wholegrain flaky cereal + 1 cup skim milk.--",
    },
    day4: {
      img: "/Powerzone/images/egg.jpg",
      dietName: "---Wholegrain Cereal and Milk--",
      dietRecipe: "--1 cup wholegrain flaky cereal + 1 cup skim milk.--",
    },
    day5: {
      img: "/Powerzone/images/egg.jpg",
      dietName: "---Wholegrain Cereal and Milk--",
      dietRecipe: "--1 cup wholegrain flaky cereal + 1 cup skim milk.--",
    },
    day6: {
      img: "/Powerzone/images/egg.jpg",
      dietName: "---Wholegrain Cereal and Milk--",
      dietRecipe: "--1 cup wholegrain flaky cereal + 1 cup skim milk.--",
    },
    day7: {
      img: "/Powerzone/images/egg.jpg",
      dietName: "---Wholegrain Cereal and Milk--",
      dietRecipe: "--1 cup wholegrain flaky cereal + 1 cup skim milk.--",
    },
  },
};

function checkBmi(bmi) {
  // const dietValue = inputValue();
  // const dietHeight = dietValue[0];
  // const dietWeight = dietValue[1];

  return bmi < 25 ? "Underweight" : "Overweight";
}

function dietConfig() {
  const currBmi = checkBmi(getValue());

  if (currBmi == "NaN") {
    alert("Please put some values");
  } else {
    var { day1, day2, day3, day4, day5, day6, day7, bgColor, status } =
      dietPlanResult[currBmi];

    deitBg.style.backgroundColor = bgColor;
    dietIndicate.innerHTML = status;
    dietContent.style.display = "block";
  }

  return [day1, day2, day3, day4, day5, day6, day7];
}

// ----CHECKING ON WHAT DAY YOU PICKED -----
function dayChecker() {
  let [day1, day2, day3] = dietConfig();
  for (let items of dietDays) {
    items.addEventListener("click", function () {
      for (let items of dietDays) {
        items.classList.remove("dietPicked");
      }

      let clickedDay = this.textContent;
      // DAY1
      if (clickedDay === "Day 1") {
        this.classList.toggle("dietPicked");
        for (let items of dietTime) {
          items.addEventListener("click", function () {
            let clickedTime = this.textContent;
            for (let items of dietTime) {
              items.classList.remove("selected");
            }
            if (clickedTime === "BREAKFAST") {
              this.classList.toggle("selected");
              dietImg.src = day1.breakfast.img;
              dietName.innerHTML = day1.breakfast.dietName;
              dietRecipe.innerHTML = day1.breakfast.dietRecipe;
            }
            if (clickedTime === "LUNCH") {
              this.classList.toggle("selected");
              dietImg.src = day1.lunch.img;
              dietName.innerHTML = day1.lunch.dietName;
              dietRecipe.innerHTML = day1.lunch.dietRecipe;
            }
            if (clickedTime === "DINNER") {
              this.classList.toggle("selected");
              dietImg.src = day1.dinner.img;
              dietName.innerHTML = day1.dinner.dietName;
              dietRecipe.innerHTML = day1.dinner.dietRecipe;
            }
            if (clickedTime === "DESSERT") {
              this.classList.toggle("selected");
              dietImg.src = day1.dessert.img;
              dietName.innerHTML = day1.dessert.dietName;
              dietRecipe.innerHTML = day1.dessert.dietRecipe;
            }
            if (clickedTime === "SNACKS") {
              this.classList.toggle("selected");
              dietImg.src = day1.snacks.img;
              dietName.innerHTML = day1.snacks.dietName;
              dietRecipe.innerHTML = day1.snacks.dietRecipe;
            }
          });
        }
      }
      if (clickedDay === "Day 2") {
        this.classList.toggle("dietPicked");
        for (let items of dietTime) {
          items.addEventListener("click", function () {
            let clickedTime = this.textContent;
            for (let items of dietTime) {
              items.classList.remove("selected");
            }
            if (clickedTime === "BREAKFAST") {
              this.classList.toggle("selected");
              dietImg.src = day2.breakfast.img;
              dietName.innerHTML = day2.breakfast.dietName;
              dietRecipe.innerHTML = day2.breakfast.dietRecipe;
            }
            if (clickedTime === "LUNCH") {
              this.classList.toggle("selected");
              dietImg.src = day2.lunch.img;
              dietName.innerHTML = day2.lunch.dietName;
              dietRecipe.innerHTML = day2.lunch.dietRecipe;
            }
            if (clickedTime === "DINNER") {
              this.classList.toggle("selected");
              dietImg.src = day2.dinner.img;
              dietName.innerHTML = day2.dinner.dietName;
              dietRecipe.innerHTML = day2.dinner.dietRecipe;
            }
            if (clickedTime === "DESSERT") {
              this.classList.toggle("selected");
              dietImg.src = day2.dessert.img;
              dietName.innerHTML = day2.dessert.dietName;
              dietRecipe.innerHTML = day2.dessert.dietRecipe;
            }
            if (clickedTime === "SNACKS") {
              this.classList.toggle("selected");
              dietImg.src = day2.snacks.img;
              dietName.innerHTML = day2.snacks.dietName;
              dietRecipe.innerHTML = day2.snacks.dietRecipe;
            }
          });
        }
      }
      if (clickedDay === "Day 3") {
        this.classList.toggle("dietPicked");
        console.log("Third Day!");
      }
      if (clickedDay === "Day 4") {
        this.classList.toggle("dietPicked");
        console.log("4th Day!");
      }
      if (clickedDay === "Day 5") {
        this.classList.toggle("dietPicked");
        console.log("Fifth Day!");
      }
      if (clickedDay === "Day 6") {
        this.classList.toggle("dietPicked");
        console.log("Sixth Day!");
      }
      if (clickedDay === "Day 7") {
        this.classList.toggle("dietPicked");
        console.log("Seventh Day!");
      }
    });
  }
}

function dietReset() {
  inputReset();
  dietIndicate.innerHTML = "Your Status";
  dietContent.style.display = "none";
  deitBg.style.backgroundColor = "#121212";
}

// ---- THE OWL SLIDER EFFECT FOR DIET DAYS ----

let dayNext = document.querySelector("#dayNext");
let dayBack = document.querySelector("#dayBack");
let i = 0;

dayNext.addEventListener("click", () => {
  i++;
  for (let days of dietDays) {
    if (i === 0) {
      days.style.left = "0px";
    }
    if (i === 1) {
      days.style.left = "-110px";
    }
    if (i === 2) {
      days.style.left = "-220px";
    }
    if (i === 3) {
      days.style.left = "-330px";
    }
    if (i === 4) {
      days.style.left = "-440px";
    }
    if (i === 5) {
      i = 4;
    }
  }
  console.log(i);
});

dayBack.addEventListener("click", () => {
  i--;
  for (let days of dietDays) {
    if (i === 0) {
      days.style.left = "0px";
    }
    if (i === 1) {
      days.style.left = "-110px";
    }
    if (i === 2) {
      days.style.left = "-220px";
    }
    if (i === 3) {
      days.style.left = "-330px";
    }
    if (i === 4) {
      days.style.left = "-440px";
    }
    if (i === 5) {
      days.style.left = "-550px";
    }
    if (i === -1) {
      i = 0;
    }
  }
  console.log(i);
});

// DIET TIME ON SELECT

function dietTimeCheck() {}

function dietInit() {
  dietConfig();
  dayChecker();
}

// green #c1e999
// blue #86b0e1
// yellow #f2da7f
// red #ec8688
// orange #f2785b
