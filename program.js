// References

const house1 = document.querySelector("[house]");
const gameWindow = document.querySelector(".game-window");

const mouseFollow = document.querySelector(".follow-mouse");




const gameWidth = 1280
const gameHeight = 720



// --------------------------------------------------------------------------------
// Function to get the accurate mouse X and Y within the game's window 
// along with other default stuff concerning the game window

let gameMouseX = 0;
let gameMouseY = 0;

window.addEventListener("mousemove", (event) => {

    offsetAmountX = window.innerWidth - (gameWindow.style.scale * gameWidth);
    offsetAmountY = window.innerHeight - (gameWindow.style.scale * gameHeight);
    gameMouseX = (event.clientX - offsetAmountX / 2) / gameWindow.style.scale;
    gameMouseY = (event.clientY - offsetAmountY / 2) / gameWindow.style.scale;

});


function resizeGame() {
    gameWindow.style.scale = Math.min(window.innerWidth / gameWidth, window.innerHeight / gameHeight) * 1;
};


// Update the game window size
window.addEventListener("resize", (event) => {
    resizeGame()
});

resizeGame()


// --------------------------------------------------------------------------------












if (house1.getAttribute("house") == 1) {
    house1.style.fontSize = "5em";
    house1.x = 5;

    console.log(house1.y);
}











function gameLoop() {

    mouseFollow.x += (gameMouseX - mouseFollow.x) / 10;
    mouseFollow.y += (gameMouseY - 50 - mouseFollow.y) / 10;

    requestAnimationFrame(gameLoop);
}

gameLoop();





