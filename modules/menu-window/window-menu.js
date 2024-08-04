









// WINDOW MENU:

import { getUi } from "../get-ui/get-ui.js";
import { windowCreate } from "../../window/window-create/window-create.js";
import { console } from "../console/console.js";

const windowMenuContainer = getUi("window-menu-container");
const menuBar = getUi("menu-bar");

export function windowMenu(menu, menus) {
    windowMenuContainer.innerHTML = "";
    windowMenuContainer.style.display = "flex";

    function hideWindowMenuContainer(event) {
        if (!windowMenuContainer.contains(event.target) && event.target !== menuBar) {
            windowMenuContainer.style.display = "none";
            document.removeEventListener("click", hideWindowMenuContainer);
        }
    }

    windowMenuContainer.addEventListener("click", function(event) {
        event.stopPropagation();
        windowMenuContainer.style.display = "none";
    });
 
    menu.addEventListener("click", function(event) {
        event.stopPropagation();
        windowMenuContainer.style.display = "flex";
        updatePosition();
        document.addEventListener("click", hideWindowMenuContainer);
    });

    function updatePosition() {
        const menuRect = menu.getBoundingClientRect();
        windowMenuContainer.style.left = `${menuRect.left}px`;
    }

    for (let m = 0; m < menus.length; m++) {
        const windowMenuButton = document.createElement("button");
        windowMenuButton.classList.add("window-menu");
        windowMenuButton.textContent = menus[m].name;
        windowMenuButton.id = menus[m].id;

        const menuSetting = menus[m];

        windowMenuContainer.appendChild(windowMenuButton);

        if (menuSetting.divisor === true) {
            const windowMenuSeparator = document.createElement("div");
            windowMenuSeparator.classList.add("window-menu-separator");
            windowMenuContainer.appendChild(windowMenuSeparator);
        }
    }

    updatePosition();
}
