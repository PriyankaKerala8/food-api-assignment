const axios = require('axios');
const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

// Callback function
function getMealWithCallback(callback) {
  axios.get(API_URL)
    .then((res) => callback(null, res.data.meals[0]))
    .catch((err) => callback(err, null));
}

// Promise function
function getMealWithPromise() {
  return axios.get(API_URL);
}

// Async/Await function
async function getMealWithAsyncAwait() {
  try {
    const res = await axios.get(API_URL);
    const meal = res.data.meals[0];
    console.log("🍴 Async/Await:");
    console.log(`Meal: ${meal.strMeal}`);
    console.log(`Category: ${meal.strCategory}`);
    console.log(`Area: ${meal.strArea}`);
    console.log("--------------------------------------------------");
  } catch (err) {
    console.error("Async/Await Error:", err.message);
  }
}

// Execute all three

// 1. Callback
getMealWithCallback((err, meal) => {
  if (err) {
    console.error("Callback Error:", err.message);
  } else {
    console.log("📞 Callback:");
    console.log(`Meal: ${meal.strMeal}`);
    console.log(`Tags: ${meal.strTags}`);
    console.log("--------------------------------------------------");
  }
});

// 2. Promise
getMealWithPromise()
  .then((res) => {
    const meal = res.data.meals[0];
    console.log("🔮 Promise:");
    console.log(`Meal: ${meal.strMeal}`);
    console.log(`Instructions: ${meal.strInstructions.slice(0, 100)}...`);
    console.log("--------------------------------------------------");
  })
  .catch((err) => {
    console.error("Promise Error:", err.message);
  });

// 3. Async/Await
getMealWithAsyncAwait();
