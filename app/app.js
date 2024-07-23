
/*---------------------------------------------------------------------------------------------
 *  copyright (c) 2024 BioBit Games Ltda. CREACTED IN 06/05/2024 DD/MM/YYYYY
 *  all rights reserverds.
 *---------------------------------------------------------------------------------------------*/





// APP MODULES : 

import { getUi } from "../modules/get-ui/get-ui.js";
import { terminal } from "../modules/terminal/terminal.js";
import { splitter } from "../modules/splitter/splitter.js";
import { tab } from "../modules/tab/tab.js";
import { console } from "../modules/console/console.js";
import { RangeProgress } from "../modules/range-progress/range-progress.js";
import { viewportGrid } from "../modules/viewport-grid/viewport-grid.js";
import { viewportSelection } from "../modules/viewport-selection/viewport-selection.js";
import { animation } from "../modules/animation/animation.js";
import { tabHighlight } from "../modules/tab-highlight/tab-highlight.js";
// import { applicationPath } from "../modules/application-path/application-path.js"

// UI IMPORTS : 

const termninalTabButton = getUi("terminal-tab-button");
const consoleTabButton = getUi("console-tab-button");
const timelineTabButton = getUi("timeline-tab-button");
// const tabCButton = document.querySelectorAll(".tab-c-button")
const terminalInput = getUi("terminal-input");


// APP LOAD : 

function appLoad(){   
    console("Application Started...", "success"); 
    splitter();
    viewportSelection();
    viewportGrid(20,20)
    animation();
    tabHighlight();
}

document.addEventListener("DOMContentLoaded",appLoad());

// TAB MANAGE : 

consoleTabButton.addEventListener("click",function(){
    tab("console");
});

timelineTabButton.addEventListener("click",function(){
    tab("timeline")
});

termninalTabButton.addEventListener("click",function(){
    tab("terminal")
});
 
// RANGE PROGRESS HIGH LIGHT : 

const inputRange = document.querySelectorAll(".inspector-range");

const inputRangee = document.getElementById("label-opacity-range");
const uiRangeProgress = new RangeProgress(inputRange);

// const listPath = applicationPath("C:/Users/Rhyan Eduardo/Documents/GitHub/rocon-studio/game")
// console(listPath,"log");

// TERMINAL : 

terminalInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        terminal(terminalInput.value);
        terminalInput.value = '';
    }
});



