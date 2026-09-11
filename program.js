// References

const house1 = document.querySelector("[house]");
const gameWindow = document.querySelector(".game-window");


function resizeGame() {
    gameWindow.style.scale = Math.min(window.innerWidth / 1280, window.innerHeight / 720) * 1;
};


// Update the game window size
window.addEventListener("resize", (event) => {
    resizeGame()
});

resizeGame()












if (house1.getAttribute("house") == 1) {
    house1.style.fontSize = "5em";
    house1.x = 5

    console.log(house1.y)
}












