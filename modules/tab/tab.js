












// MODULE :

import { getUi } from "../get-ui/get-ui.js";

const terminalInput = getUi("terminal-input");

// TAB :

const consoleTab = document.getElementById("console-tab");
const timelineTab = document.getElementById("timeline-tab");
const termnialTab = document.getElementById("terminal-tab");


export function tab(tab){

    switch (tab){
        case "console": 
            consoleTab.style.display = "flex";
            timelineTab.style.display = "none";
            termnialTab.style.display = "none";
        break;
        case "timeline" :
            consoleTab.style.display = "none";
            termnialTab.style.display = "none";
            timelineTab.style.display = "flex";
        break;   
        case "terminal" :
            consoleTab.style.display = "none";
            timelineTab.style.display = "none";
            termnialTab.style.display = "flex";
            terminalInput.focus();
        break;    


    } 

}


