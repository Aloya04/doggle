let title = document.title;
window.addEventListener("blur", () => {
    document.title = "Milo Misses You!";
})
window.addEventListener("focus", () => {
    document.title = title;
})