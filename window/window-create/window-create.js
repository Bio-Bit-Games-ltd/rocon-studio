










// WINDOW CREATE : 

import { Window } from "../../modules/window/window.js";
import { getUi } from "../../modules/get-ui/get-ui.js";
import { console } from "../../modules/console/console.js";
import { devMode } from "../../modules/dev-mode/dev-mode.js";

const windowCreateContent = getUi("window-create-content");

export function windowCreate(){

    const windowCreateSettings = {
        width: 712,
        height: 550,
        name: "Create Application",
        shild: true,
        windowCloseVisible : devMode(),
        resize : "vertical",
        center : true,
    } 

    const windowCreateInstance = new Window(windowCreateContent,windowCreateSettings)


    windowCreateInstance.createWindow(); 

    // windowCreateInstance.removeWindow(); 

    return { 
        windowCreateInstance:windowCreateInstance
    }
}