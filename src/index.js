let recipeForm = document.querySelector("#recipe-generator");
recipeForm.addEventListener("submit", generate);

function generate(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let apiKey = `b9b10f3af19o1ba6ec0aed0664cb453t`;
  let prompt = `Please generate a recipe based on ${searchInput.value}`;
  let context = `You are a highly skilled AI Baking assistant that knows a range of different dessert recipes from just one ingredient. Please use UK imperial measurements such as: "grams" and make the answer short.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayRecipe);

  let recipeContainer = document.querySelector(`#recipe`);
  let hintElement = document.querySelector(".hint");
  hintElement.classList.add("hidden");
  recipeContainer.classList.remove("hidden");
  recipeContainer.classList.remove("blink");
  recipeContainer.innerHTML = `<span class="blink">⌛️</span> Please wait a moment...`;
}
function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}
