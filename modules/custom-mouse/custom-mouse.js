










// CUSTOM MOUSE : 

import { getUi } from "../get-ui/get-ui.js";

export function customMouse(element, icon) {
    const customMouse = getUi("custom-mouse");
    const mouseCursor = document.querySelector(".custom-mouse-cursor");

    element.addEventListener("mouseenter", function() {
        customMouse.style.display = "flex";
    });

    element.addEventListener("mouseleave", function() {
        customMouse.style.display = "none";
    });

    element.addEventListener("mousemove", function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        customMouse.style.left = `${mouseX}px`;
        customMouse.style.top = `${mouseY - 10}px`;
    });

    mouseCursor.classList.add(icon);
}
