
const renderJoke = joke => {
  $("#app").append(`<li>${joke}</li>`);
};

const fetchRandomJoke = () => {
  fetch("https://api.icndb.com/jokes/random/?escape=javascript")
    .then(res => res.json())
    .then(joke => renderJoke(joke.value.joke))
    .catch(err => console.log(err));
};

const giveLameJoke = () => {
  renderJoke("When a clock is hungry. It goes back four seconds.");
};

fetchRandomJoke();
renderJoke(
  "Why can’t a nose be 12 inches long? Because then it would be a foot!"
);
giveLameJoke();
