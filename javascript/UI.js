

// =================
// Build menu open/close
// =================




window.addEventListener("keypress", (event) => {
    if (event.key === "b") {
        toggleBuildMenu()
    }
});

buildMenuToggle.addEventListener("click", () => {
    toggleBuildMenu()
});

toggleBuildMenu(0)

function toggleBuildMenu(mode) {
    if (buildMenu.y === 720 || mode===1) {
        buildMenu.y = 630;
        buildMenuToggle.y = 603;
        buildMenuToggle.innerHTML = '<i class="ph ph-x"></i>'
    } else {
        buildMenu.y = 720;
        buildMenuToggle.y = 693;
        buildMenuToggle.innerHTML = '<i class="ph ph-hammer"></i>'
    };

}
