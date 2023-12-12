let recipeForm = document.querySelector("#recipe-generator");
recipeForm.addEventListener("submit", generate);

function generate(event) {
  event.preventDefault();
  new Typewriter("#recipe", {
    strings: "cupcake are so good",
    autoStart: true,
    delay: 1,
  });
}
