// Shared by every page of the final project.
//
// 1. Slogan banner (landing page only): starts it and wires up its
//    Pause / Play button. Without this script the banner stays still, so
//    nothing moves that a visitor cannot stop (WCAG 2.2.2 Pause, Stop, Hide).
const tickerWrap = document.querySelector(".ticker-wrap");
const tickerToggle = document.querySelector(".ticker-toggle");

if (tickerWrap && tickerToggle) {
    const setRunning = (running) => {
        tickerWrap.classList.toggle("is-running", running);
        tickerToggle.textContent = running ? "Pause banner" : "Play banner";
    };

    tickerToggle.hidden = false;
    setRunning(true);

    tickerToggle.addEventListener("click", () => {
        setRunning(!tickerWrap.classList.contains("is-running"));
    });
}

// 2. Phone menu (every page): Escape closes it and puts focus back on
//    the Menu button.
document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    const openMenu = document.querySelector("details.dropdown[open]");
    if (!openMenu) return;

    openMenu.open = false;
    openMenu.querySelector("summary").focus();
});
