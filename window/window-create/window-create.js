










// WINDOW CREATE : 

import { Window } from "../../modules/window/window.js";
import { getUi } from "../../modules/get-ui/get-ui.js";

const windowCreateContent = getUi("window-create-content");

export function windowCreate(){

    const windowCreateSettings = {
        width: 705,
        height: 550,
        name: "Create Application",
        shild: true,
        windowCloseVisible : false
    }

    const windowCreateInstance = new Window(windowCreateContent,windowCreateSettings)

    windowCreateInstance.createWindow();

    // windowCreateInstance.removeWindow();
}