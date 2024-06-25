
/*---------------------------------------------------------------------------------------------
 *  copyright (c) 2024 BioBit Games Ltda. CREACTED IN 06/05/2024 DD/MM/YYYYY
 *  all rights reserverds.
 *---------------------------------------------------------------------------------------------*/





// APP MODULES : 

import { splitter } from "../modules/splitter/splitter.js";
import { tab } from "../modules/tab/tab.js";
import { console } from "../modules/console/console.js";
import { RangeProgress } from "../modules/range-progress/range-progress.js";
import { viewportGrid } from "../modules/viewport-grid/viewport-grid.js";
import { viewportSelection } from "../modules/viewport-selection/viewport-selection.js";
import { animation } from "../modules/animation/animation.js";

// UI IMPORTS : 

const consoleTabButton = document.getElementById("console-tab-button");
const timelineTabButton = document.getElementById("timeline-tab-button");

// APP LOAD : 

function appLoad(){   
    console("Engine Started...", "success"); 
    console("Viewport Grid Size Changed 30x40", "success"); 
    splitter();
    viewportSelection();
    viewportGrid(20,20)
    animation();
}

document.addEventListener("DOMContentLoaded",appLoad());

// TAB MANAGE : 

consoleTabButton.addEventListener("click",function(){
    console("Console tab opened", "log"); 
    tab("console");
});

timelineTabButton.addEventListener("click",function(){
    tab("timeline")
});
 
// RANGE PROGRESS HIGH LIGHT : 

const inputRange = document.querySelectorAll(".inspector-range");

const inputRangee = document.getElementById("label-opacity-range");
const uiRangeProgress = new RangeProgress(inputRangee);




