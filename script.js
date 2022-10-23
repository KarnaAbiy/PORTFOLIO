const button = document.querySelector("#button");
const score = document.querySelector("#score");

let clicks = 0;

button.addEventListener("click", () => {
    clicks += 1;
    score.innerHTML = clicks;
})

