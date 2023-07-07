const toggle360ModeButton = document.querySelector(".toggle-360");
const sofaImg = document.getElementById("sofa-img");

cardImgParent.appendChild(video);

toggle360ModeButton.addEventListener("click", () => {
    const active = toggle360ModeButton.toggleAttribute("data-active");
    toggle360ModeButton.classList.add("fade");
    setTimeout(() => toggle360ModeButton.classList.remove("fade"), 500);
    if (active) {
        sofaImg.setAttribute("src", "./assets/sofa.gif");
    } else {
        sofaImg.setAttribute("src", "./assets/sofa.png");
    }
});
