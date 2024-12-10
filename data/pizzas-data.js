const menu = [
  {
    id: 1,
    name: "Margherita",
    image: "imgs/pizze/margherita.webp",
    ingredients: ["pomodoro", "mozzarella"],
  },
  {
    id: 2,
    name: "Marinara",
    image: "imgs/pizze/marinara.jpeg",
    ingredients: ["pomodoro", "aglio", "origano"],
  },
  {
    id: 3,
    name: "Diavola",
    image: "imgs/pizze/diavola.jpeg",
    ingredients: ["pomodoro", "mozzarella", "salame piccante"],
  },
  {
    id: 4,
    name: "Bufalina",
    image: "imgs/pizze/bufalina.jpeg",
    ingredients: ["pomodoro", "mozzarella di bufala"],
  },
  {
    id: 5,
    name: "4 formaggi",
    image: "imgs/pizze/4_formaggi.jpeg",
    ingredients: [
      "pomodoro",
      "mozzarella",
      "gorgonzola",
      "parmigiano",
      "ricotta",
    ],
  },
];

// creare un array di ingredienti che non si ripetono anche se presenti più volte

const ingredients = [];

for (i = 0; i <= menu.length; i++) {
  const curPizzaIngredients = menu[i].ingredients;
  for (j = 0; j <= curPizzaIngredients.length; j++) {
    const curIngredient = curPizzaIngredients[j];
    if (!ingredients.includes(curIngredient)) {
      ingredients.push(curIngredient);
    }
  }
}

console.log(ingredients);
