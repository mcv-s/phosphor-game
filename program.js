


// Object selectors

const gameWindow = document.querySelector(".game-window");

const mouseFollowDefault = document.querySelector(".follow-mouse");
const buildMenu = document.querySelector(".build-menu");
const buildMenuToggle = document.querySelector(".build-menu-toggle");


let mouseFollow = mouseFollowDefault;

const gameWidth = 1280
const gameHeight = 720



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










// =================
// Game Resizing
// =================

function resizeGame() {
    gameWindow.style.scale = Math.min(window.innerWidth / gameWidth, window.innerHeight / gameHeight) * 1;
};

const dist = (element1, element2) => {
    return Math.sqrt(Math.pow(element1.x - element2.x, 2) + Math.pow(element1.y - element2.y, 2));
}

// Update the game window size
window.addEventListener("resize", (event) => {
    resizeGame()
});

resizeGame()











// =================
// Custom gameObject Properties
// =================


function initProperties(objectToInit) {
    Object.defineProperty(objectToInit, "x", {
        get() {
            return parseFloat(this.style.left) || 0;
        },
        set(value) {
            this.style.left = value + "px";
        }
    });

    Object.defineProperty(objectToInit, "y", {
        get() {
            return parseFloat(this.style.top) || 0;
        },
        set(value) {
            this.style.top = value + "px";
        }
    });
}








const makeElement = (icon, id, x, y, scale = 1) => {
    const element = document.createElement("i");
    element.className = "ph ph-" + icon;
    element.id = id;
    element.setAttribute("gameObject", "");
    element.setAttribute("building", "");

    gameWindow.appendChild(element);

    initProperties(element)
    element.x = x;
    element.y = y;

    return element;

}











//click detection
window.addEventListener("click", (event) => {
    // building building if the build icon is clicked

    if (event.target.hasAttribute("buildIcon")) {
        console.log(event.target.id);
        mouseFollow = makeElement(event.target.id, objectcount, gameMouseX, gameMouseY);
        objectcount++;
    }
    if (event.target.hasAttribute("gameObject")) {
        let object = event.target;
        console.log(object.id);
        const buildings = document.querySelectorAll("[building]");
        let tclose = 0;
        for (let i = 0; i < buildings.length; i++) {
            let object2 = buildings[i];
            if (dist(object, object2)<10 && object !== object2){
                tclose = 1;
                console.log('close')
                break;
            }
        }
        if (!tclose){
            mouseFollow = mouseFollowDefault;
            for (let i = 0; i < buildings.length; i++) {
                let object2 = buildings[i];
                if (dist(object, object2)<100 && object !== object2){
                    //do something that 'connects' the objects
                }
            }
        }
    }
});




// =================
// Build menu open/close
// =================




window.addEventListener("keypress", (event) => {
    if (event.key === "m") {
        toggleBuildMenu()
    }
});

buildMenuToggle.addEventListener("click", () => {
    toggleBuildMenu()
});


function toggleBuildMenu() {
    console.log(buildMenu.y)
    if (buildMenu.y === 720) {
        buildMenu.y = 630;
        buildMenuToggle.y = 603;
        buildMenuToggle.innerHTML = '<i class="ph ph-x"></i>'
    } else {
        buildMenu.y = 720;
        buildMenuToggle.y = 693;
        buildMenuToggle.innerHTML = '<i class="ph ph-hammer"></i>'
    };

}








function gameLoop() {

    mouseFollow.x += (gameMouseX - mouseFollow.x) / 1;
    mouseFollow.y += (gameMouseY - mouseFollow.y) / 1;



    // Must 
    requestAnimationFrame(gameLoop);
}

gameLoop();



