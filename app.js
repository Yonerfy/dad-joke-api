async function randonJoke() {
    const joke = await fetch("https://icanhazdadjoke.com/",
        {
            headers: {
                'Accept': 'application/json'
            }
        }).then(data => data.json());
    return joke.joke;
}
async function addJoke() {
    const div = document.querySelector(".joke");
    div.innerHTML = await randonJoke();
}
addJoke();

const anotherJoke = function () {
    const btn = document.querySelector(".another-joke");
    btn.addEventListener("click", addJoke);
}
anotherJoke();



