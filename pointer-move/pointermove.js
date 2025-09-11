addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const lightness = Math.round((x / window.innerWidth) * 100);
    const saturation = Math.round(y / window.innerHeight * 100);
    document.documentElement.style.setProperty("--bg-color", `hsl(113, ${saturation}%, ${lightness}%)`);
});