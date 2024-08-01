












// WINDOW MENU:

import { getUi } from "../get-ui/get-ui.js";
import { windowCreate } from "../../window/window-create/window-create.js";
import { console } from "../console/console.js";

const windowMenuContainer = getUi("window-menu-container");
const fileMenu = getUi("menu-file")

export function windowMenu(menu,menus) {

    windowMenuContainer.innerHTML = "";
    windowMenuContainer.style.display = "flex";

    windowMenuContainer.addEventListener("click",function(){
        windowMenuContainer.style.display = "none";
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

    function hideWindowMenuContainer(event) {
        setTimeout(() => {
            if (!windowMenuContainer.contains(event.target) && event.target !== fileMenu) {
                windowMenuContainer.style.display = "none";
            }
        }, 10);
    }
    document.addEventListener("click", hideWindowMenuContainer);

}

