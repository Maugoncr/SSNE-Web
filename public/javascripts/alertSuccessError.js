window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    if (loader) {
        loader.classList.add("loader--hidden");
        loader.addEventListener("transitionend", () => {
            if (loader.parentNode) { // verificamos si el elemento todavía está en el DOM
                loader.parentNode.removeChild(loader);
            }
        });
    }
});

function Return() {
    window.location.href = '/';
}
