










// WINDOW CREATE : 

import { Window } from "../../modules/window/window.js";
import { getUi } from "../../modules/get-ui/get-ui.js";
import { console } from "../../modules/console/console.js";

const windowCreateContent = getUi("window-create-content");

export function windowCreate(){

    const windowCreateSettings = {
        width: 720,
        height: 550,
        name: "Create Application",
        shild: true,
        windowCloseVisible : false,
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