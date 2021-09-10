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
    // if (newHeight == "NaN") {
    //   console.log("Please Put a Value");
    // }
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
      breakfast: {
        img: "/Powerzone/images/yogurtFruit.jpg",
        dietName: "Yoghurt and Fruit",
        dietRecipe:
          "1 tub (200g) low fat/no added sugar yoghurt + 1 serve of fruit (eg. 2 nectarines or 200mL fruit juice or 1 apple).",
      },
      lunch: {
        img: "/Powerzone/images/tunaSalad.jpg",
        dietName: "Tuna Salad Sandwich",
        dietRecipe:
          "200g tinned tuna in springwater (drained) + 2 cups salad vegetables (eg. lettuce, cucumber, tomato) + 2 tbsp avocado + 1 slice cheese + 2 slices multigrain bread.",
      },
      dinner: {
        img: "/Powerzone/images/porkchopVeg.jpg",
        dietName: "Pork Chops and Vegetables",
        dietRecipe:
          "120g lean grilled pork chops + 1 medium baked potato + 1.5 cups cooked vegetables (eg. carrot, squash, broccoli) + 2 tsp oil in cooking or as a dressing.",
      },
      dessert: {
        img: "/Powerzone/images/fruitSalad.jpg",
        dietName: "Fruit Salad",
        dietRecipe: " 1 cup fresh fruit salad. ",
      },
      snacks: {
        img: "/Powerzone/images/crackers.jpg",
        dietName: "Crackers with Cheese",
        dietRecipe: "40g reduced-fat cheese + 4 wholegrain crackers.",
      },
    },
    day4: {
      breakfast: {
        img: "/Powerzone/images/avocadoToast.jpg",
        dietName: "Avocado on Toast:",
        dietRecipe:
          "2 tbsp mashed avocado on 2 slices multigrain bread (toasted) + 1 serve of fruit (2 kiwi fruit or 2 apricots or 1 pear)",
      },
      lunch: {
        img: "/Powerzone/images/barleySoup.jpg",
        dietName: "Chickpea, Vegetable and Barley Soup:",
        dietRecipe:
          "¾ cup chickpeas + 1 cup cooked vegetables (eg. tomato, celery, onion, carrot, spinach) + ½ cup cooked barley.",
      },
      dinner: {
        img: "/Powerzone/images/beefRamen.jpg",
        dietName: "Prawn and Kimchi Omelette (1 serve)",
        dietRecipe: "Served with 2 cup salad and 1 slice wholegrain bread.",
      },
      dessert: {
        img: "/Powerzone/images/fruitSmoothie.jpg",
        dietName: "Beef Ramen (1 Serve)",
        dietRecipe: " Served with additional 2 cup cooked vegetables.",
      },
      snacks: {
        img: "/Powerzone/images/fruits.jpg",
        dietName: "Fruits",
        dietRecipe:
          "1 serve of fruit (eg. 1 cups diced watermelon/rockmelon or berries) + 20g reduced fat cheese.",
      },
    },
    day5: {
      breakfast: {
        img: "/Powerzone/images/porridge.jpg",
        dietName: "Porridge with Fruit",
        dietRecipe:
          "½ cup rolled oats + 2 cups berries (NB: porridge made with water + 0.5 cup skim milk).",
      },
      lunch: {
        img: "/Powerzone/images/misoSoup.jpg",
        dietName: "Tofu Miso Soup (1 serve)",
        dietRecipe: "Served with 2 cups salad + 2 tsp balsamic vinegar.",
      },
      dinner: {
        img: "/Powerzone/images/chickenVeg.jpg",
        dietName: "Grilled Chicken and Vegetables",
        dietRecipe:
          "100g grilled chicken + 1.5 cups vegetables (eg. carrot, broccoli, eggplant) + 1 medium corn on the cob + 2 tsp oil in cooking or as a dressing.",
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
    day6: {
      breakfast: {
        img: "/Powerzone/images/muesli.jpg",
        dietName: "Muesli and Milk with Added Fruit",
        dietRecipe: "1 cup muesli cereal + 1 cup low fat milk + 1 banana.",
      },
      lunch: {
        img: "/Powerzone/images/chimkenBurger.jpg",
        dietName: "Homemade Chicken Burger",
        dietRecipe:
          "100g grilled chicken + 2 cups salad vegetables (eg. lettuce, cucumber, tomato) + 2 tbsp avocado + 1 grainy bread roll. ",
      },
      dinner: {
        img: "/Powerzone/images/lambChop.jpg",
        dietName: "Lamb Chop with Mash and Vegetables",
        dietRecipe:
          "1 large grilled lamb chop (fat trimmed) + 1 medium potato (mashed with 3 tsp margarine + a splash skim milk) + 1.5 cups vegetables (eg. carrot, pumpkin, broccoli).",
      },
      dessert: {
        img: "/Powerzone/images/mangoParfait.jpg",
        dietName: "Mango & Yoghurt Parfait",
        dietRecipe:
          "200g low-fat yoghurt layered with ½ cup sliced mango and 2 tbsp chopped nuts.",
      },
      snacks: {
        img: "/Powerzone/images/fruits.jpg",
        dietName: "Fruits",
        dietRecipe:
          "1 piece of small fruit (eg. kiwi fruit, apricot, apple, mandarin). + 20g cheese.",
      },
    },
    day7: {
      breakfast: {
        img: "/Powerzone/images/scrambleEggs.png",
        dietName: "Scrambled Eggs on Sourdough",
        dietRecipe:
          "2 eggs (scrambled) + 2 slices sourdough bread (toasted) + 3 tsp margarine or 2 tbsp avocado + 1 average piece of fruit.",
      },
      lunch: {
        img: "/Powerzone/images/avocdoSandwich.jpg",
        dietName: "Cheese, Avocado and Salad Sandwich",
        dietRecipe:
          "40g reduced-fat hard cheese + 2 cups salad vegetables (eg. lettuce, carrot cucumber, tomato, capsicum) + 2 tbsp avocado + 2 slices multigrain bread.",
      },
      dinner: {
        img: "/Powerzone/images/grilledSalmon.jpg",
        dietName: "Grilled Salmon and Vegetables",
        dietRecipe:
          "125g salmon + 1 cup cooked brown rice + 1.5 cups steamed vegetables (eg. cauliflower, broccoli, squash).",
      },
      dessert: {
        img: "/Powerzone/images/fruitPop.jpeg",
        dietName: "Fruit Pop",
        dietRecipe:
          "Made with frozen fruits (eg. bananas or mangos) with Greek yoghurt.",
      },
      snacks: {
        img: "/Powerzone/images/lowYogurt.jpg",
        dietName: "Low Fat Yogurt",
        dietRecipe:
          "1 tub low fat/no added sugar yoghurt. + 10 nuts (unsalted, raw/dry roasted).",
      },
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
  let [day1, day2, day3, day4, day5, day6, day7] = dietConfig();
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
        for (let items of dietTime) {
          items.addEventListener("click", function () {
            let clickedTime = this.textContent;
            for (let items of dietTime) {
              items.classList.remove("selected");
            }
            if (clickedTime === "BREAKFAST") {
              this.classList.toggle("selected");
              dietImg.src = day3.breakfast.img;
              dietName.innerHTML = day3.breakfast.dietName;
              dietRecipe.innerHTML = day3.breakfast.dietRecipe;
            }
            if (clickedTime === "LUNCH") {
              this.classList.toggle("selected");
              dietImg.src = day3.lunch.img;
              dietName.innerHTML = day3.lunch.dietName;
              dietRecipe.innerHTML = day3.lunch.dietRecipe;
            }
            if (clickedTime === "DINNER") {
              this.classList.toggle("selected");
              dietImg.src = day3.dinner.img;
              dietName.innerHTML = day3.dinner.dietName;
              dietRecipe.innerHTML = day3.dinner.dietRecipe;
            }
            if (clickedTime === "DESSERT") {
              this.classList.toggle("selected");
              dietImg.src = day3.dessert.img;
              dietName.innerHTML = day3.dessert.dietName;
              dietRecipe.innerHTML = day3.dessert.dietRecipe;
            }
            if (clickedTime === "SNACKS") {
              this.classList.toggle("selected");
              dietImg.src = day3.snacks.img;
              dietName.innerHTML = day3.snacks.dietName;
              dietRecipe.innerHTML = day3.snacks.dietRecipe;
            }
          });
        }
      }
      if (clickedDay === "Day 4") {
        this.classList.toggle("dietPicked");
        for (let items of dietTime) {
          items.addEventListener("click", function () {
            let clickedTime = this.textContent;
            for (let items of dietTime) {
              items.classList.remove("selected");
            }
            if (clickedTime === "BREAKFAST") {
              this.classList.toggle("selected");
              dietImg.src = day4.breakfast.img;
              dietName.innerHTML = day4.breakfast.dietName;
              dietRecipe.innerHTML = day4.breakfast.dietRecipe;
            }
            if (clickedTime === "LUNCH") {
              this.classList.toggle("selected");
              dietImg.src = day4.lunch.img;
              dietName.innerHTML = day4.lunch.dietName;
              dietRecipe.innerHTML = day4.lunch.dietRecipe;
            }
            if (clickedTime === "DINNER") {
              this.classList.toggle("selected");
              dietImg.src = day4.dinner.img;
              dietName.innerHTML = day4.dinner.dietName;
              dietRecipe.innerHTML = day4.dinner.dietRecipe;
            }
            if (clickedTime === "DESSERT") {
              this.classList.toggle("selected");
              dietImg.src = day4.dessert.img;
              dietName.innerHTML = day4.dessert.dietName;
              dietRecipe.innerHTML = day4.dessert.dietRecipe;
            }
            if (clickedTime === "SNACKS") {
              this.classList.toggle("selected");
              dietImg.src = day4.snacks.img;
              dietName.innerHTML = day4.snacks.dietName;
              dietRecipe.innerHTML = day4.snacks.dietRecipe;
            }
          });
        }
      }
      if (clickedDay === "Day 5") {
        this.classList.toggle("dietPicked");
        for (let items of dietTime) {
          items.addEventListener("click", function () {
            let clickedTime = this.textContent;
            for (let items of dietTime) {
              items.classList.remove("selected");
            }
            if (clickedTime === "BREAKFAST") {
              this.classList.toggle("selected");
              dietImg.src = day5.breakfast.img;
              dietName.innerHTML = day5.breakfast.dietName;
              dietRecipe.innerHTML = day5.breakfast.dietRecipe;
            }
            if (clickedTime === "LUNCH") {
              this.classList.toggle("selected");
              dietImg.src = day5.lunch.img;
              dietName.innerHTML = day5.lunch.dietName;
              dietRecipe.innerHTML = day5.lunch.dietRecipe;
            }
            if (clickedTime === "DINNER") {
              this.classList.toggle("selected");
              dietImg.src = day5.dinner.img;
              dietName.innerHTML = day5.dinner.dietName;
              dietRecipe.innerHTML = day5.dinner.dietRecipe;
            }
            if (clickedTime === "DESSERT") {
              this.classList.toggle("selected");
              dietImg.src = day5.dessert.img;
              dietName.innerHTML = day5.dessert.dietName;
              dietRecipe.innerHTML = day5.dessert.dietRecipe;
            }
            if (clickedTime === "SNACKS") {
              this.classList.toggle("selected");
              dietImg.src = day5.snacks.img;
              dietName.innerHTML = day5.snacks.dietName;
              dietRecipe.innerHTML = day5.snacks.dietRecipe;
            }
          });
        }
      }
      if (clickedDay === "Day 6") {
        this.classList.toggle("dietPicked");
        for (let items of dietTime) {
          items.addEventListener("click", function () {
            let clickedTime = this.textContent;
            for (let items of dietTime) {
              items.classList.remove("selected");
            }
            if (clickedTime === "BREAKFAST") {
              this.classList.toggle("selected");
              dietImg.src = day6.breakfast.img;
              dietName.innerHTML = day6.breakfast.dietName;
              dietRecipe.innerHTML = day6.breakfast.dietRecipe;
            }
            if (clickedTime === "LUNCH") {
              this.classList.toggle("selected");
              dietImg.src = day6.lunch.img;
              dietName.innerHTML = day6.lunch.dietName;
              dietRecipe.innerHTML = day6.lunch.dietRecipe;
            }
            if (clickedTime === "DINNER") {
              this.classList.toggle("selected");
              dietImg.src = day6.dinner.img;
              dietName.innerHTML = day6.dinner.dietName;
              dietRecipe.innerHTML = day6.dinner.dietRecipe;
            }
            if (clickedTime === "DESSERT") {
              this.classList.toggle("selected");
              dietImg.src = day6.dessert.img;
              dietName.innerHTML = day6.dessert.dietName;
              dietRecipe.innerHTML = day6.dessert.dietRecipe;
            }
            if (clickedTime === "SNACKS") {
              this.classList.toggle("selected");
              dietImg.src = day6.snacks.img;
              dietName.innerHTML = day6.snacks.dietName;
              dietRecipe.innerHTML = day6.snacks.dietRecipe;
            }
          });
        }
      }
      if (clickedDay === "Day 7") {
        this.classList.toggle("dietPicked");
        for (let items of dietTime) {
          items.addEventListener("click", function () {
            let clickedTime = this.textContent;
            for (let items of dietTime) {
              items.classList.remove("selected");
            }
            if (clickedTime === "BREAKFAST") {
              this.classList.toggle("selected");
              dietImg.src = day7.breakfast.img;
              dietName.innerHTML = day7.breakfast.dietName;
              dietRecipe.innerHTML = day7.breakfast.dietRecipe;
            }
            if (clickedTime === "LUNCH") {
              this.classList.toggle("selected");
              dietImg.src = day7.lunch.img;
              dietName.innerHTML = day7.lunch.dietName;
              dietRecipe.innerHTML = day7.lunch.dietRecipe;
            }
            if (clickedTime === "DINNER") {
              this.classList.toggle("selected");
              dietImg.src = day7.dinner.img;
              dietName.innerHTML = day7.dinner.dietName;
              dietRecipe.innerHTML = day7.dinner.dietRecipe;
            }
            if (clickedTime === "DESSERT") {
              this.classList.toggle("selected");
              dietImg.src = day7.dessert.img;
              dietName.innerHTML = day7.dessert.dietName;
              dietRecipe.innerHTML = day7.dessert.dietRecipe;
            }
            if (clickedTime === "SNACKS") {
              this.classList.toggle("selected");
              dietImg.src = day7.snacks.img;
              dietName.innerHTML = day7.snacks.dietName;
              dietRecipe.innerHTML = day7.snacks.dietRecipe;
            }
          });
        }
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

// let dayNext = document.querySelector("#dayNext");
// let dayBack = document.querySelector("#dayBack");
// let i = 0;

// dayNext.addEventListener("click", () => {
//   i++;
//   for (let days of dietDays) {
//     if (i === 0) {
//       days.style.left = "0px";
//     }
//     if (i === 1) {
//       days.style.left = "-110px";
//     }
//     if (i === 2) {
//       days.style.left = "-220px";
//     }
//     if (i === 3) {
//       days.style.left = "-330px";
//     }
//     if (i === 4) {
//       days.style.left = "-440px";
//     }
//     if (i === 5) {
//       i = 4;
//     }
//   }
//   console.log(i);
// });

// dayBack.addEventListener("click", () => {
//   i--;
//   for (let days of dietDays) {
//     if (i === 0) {
//       days.style.left = "0px";
//     }
//     if (i === 1) {
//       days.style.left = "-110px";
//     }
//     if (i === 2) {
//       days.style.left = "-220px";
//     }
//     if (i === 3) {
//       days.style.left = "-330px";
//     }
//     if (i === 4) {
//       days.style.left = "-440px";
//     }
//     if (i === 5) {
//       days.style.left = "-550px";
//     }
//     if (i === -1) {
//       i = 0;
//     }
//   }
//   console.log(i);
// });

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
