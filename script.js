const button = document.querySelector("#button");
const score = document.querySelector("#score");

let clicks = 0;

button.addEventListener("click", () => {
    clicks += 1;
    score.innerHTML = clicks;
})
switch(score) {
    case 5:
        document.getElementById("image").src = "images/abiy5.jpg";
        break;
    case 10:
        document.getElementById("image").src = "./sounds/ora.mp3";
        break;
    case 50:x
        document.getElementById("image").src = "images/abiy50.jpg";
        break;
    case 100:
        document.getElementById("image").src = "images/abiy100.jpg";
        break;
}  

