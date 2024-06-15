


const ui = {
    controls: document.getElementById("controls"),
    drawer: document.getElementById("drawer"),
    dismissBtn: document.getElementById("dismissBtn")
};

const setupEventListeners = (e) => {
    ui.controls.addEventListener("click", showDrawer);
    ui.dismissBtn.addEventListener("click", hideDrawer);
};

const showDrawer = (e) => {
    ui.drawer.classList.add("show");
}


const hideDrawer = (e) => {
    ui.drawer.classList.remove("show");
}

setupEventListeners();