// References

const house1 = document.querySelector("[house]");
const gameWindow = document.querySelector(".game-window");

const mouseFollowDefault = document.querySelector(".follow-mouse");
let mouseFollow = mouseFollowDefault;

const gameWidth = 1280
const gameHeight = 720

const rect = gameWindow.getBoundingClientRect();


// --------------------------------------------------------------------------------
// Function to get the accurate mouse X and Y within the game's window 
// along with other default stuff concerning the game window

let gameMouseX = 0;
let gameMouseY = 0;
let objectcount = 0;



window.addEventListener("mousemove", (event) => {

    offsetAmountX = window.innerWidth - (gameWindow.style.scale * gameWidth);
    offsetAmountY = window.innerHeight - (gameWindow.style.scale * gameHeight);
    gameMouseX = (event.clientX - offsetAmountX / 2) / gameWindow.style.scale;
    gameMouseY = (event.clientY - offsetAmountY / 2) / gameWindow.style.scale;
});


function resizeGame() {
    gameWindow.style.scale = Math.min(window.innerWidth / gameWidth, window.innerHeight / gameHeight) * 1;
};

const makeElement = (icon, id, x, y, scale = 1) => {
    const element = document.createElement("i");
    element.className = "ph ph-" + icon;
    element.id = id;
    element.setAttribute("gameObject", "");

    gameWindow.appendChild(element);
    Object.defineProperty(element, "x", {
        get() {
            return parseFloat(this.style.left) || 0;
        },
        set(value) {
            this.style.left = value + "px";
        }
    });

    Object.defineProperty(element, "y", {
        get() {
            return parseFloat(this.style.top) || 0;
        },
        set(value) {
            this.style.top = value + "px";
        }
    });
    element.x = x;
    element.y = y;

    return element;

}

//click detection
window.addEventListener("click", (event) => {
    // building building if the build icon is clicked
    //console.log(event.target);
    if (event.target.hasAttribute("buildIcon")) {
        console.log(event.target.id);
        mouseFollow = makeElement(event.target.id, objectcount, gameMouseX, gameMouseY);
        objectcount++;
    }
    if (event.target.hasAttribute("gameObject")) {
        console.log(event.target.id);
        mouseFollow = mouseFollowDefault;
    }
});

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

    mouseFollow.x += (gameMouseX - mouseFollow.x) / 1;
    mouseFollow.y += (gameMouseY - mouseFollow.y) / 1;



    // Must 
    requestAnimationFrame(gameLoop);
}

gameLoop();



