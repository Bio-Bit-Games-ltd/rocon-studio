












// MODULE :

// TAB :

const consoleTab = document.getElementById("console-tab");
const timelineTab = document.getElementById("timeline-tab");

export function tab(tab){

    switch (tab){
        case "console": 
            consoleTab.style.display = "flex";
            timelineTab.style.display = "none";
        break;
        case "timeline" :
            consoleTab.style.display = "none";
            timelineTab.style.display = "flex";
        break;   


    } 

}


