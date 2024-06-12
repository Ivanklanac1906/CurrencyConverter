
const state = {
    openedDraw: null
}


//* selectors

const ui = {
    controls: document.getElementById("controls"),
    drawer: document.getElementById("drawer"),
    dismissBtn: document.getElementById("dismiss-btn")
};

// event listeners

const setupEventListeners = ()  => {
    ui.controls.addEventListener("click", showDrawer);
    ui.dismissBtn.addEventListener("click", hideDrawer);
};

// event handlers

const showDrawer = (e) => {
    state.openedDraw = e.target.id;
    ui.drawer.classList.add("show");
};

function hideDrawer(e) {
    ui.drawer.classList.remove("show");
};






setupEventListeners();