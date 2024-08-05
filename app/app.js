
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
import { inspector } from "../modules/inspector/inspector.js";
import { shild } from "../modules/shild/shild.js";
import { presetHighlight } from "../modules/preset-highlight/preset-highlight.js";
import { windowMenu } from "../modules/menu-window/window-menu.js";
import { tabManage } from "../modules/tab-manage/tab-manage.js";

const divTest = getUi("divtest");
divTest.style.color = "red";
divTest.style.zIndex = "40000";

const divTest2 = getUi("divtest2");
divTest2.style.color = "red";
divTest2.style.zIndex = "40000";

const uitabs = [
    {
        name: "Addon Master",
        content: divTest,
        ID: "TABTL",
        location: "top"
    },
    {
        name: "Addon Master",
        content: divTest2,
        ID: "TABTgL",
        location: "bottom"
    }
];

// Chama a função tabManage com a lista de abas
tabManage(uitabs);

// WINDOWS : 

import { windowCreate } from "../window/window-create/window-create.js";

// UI IMPORTS : 

const termninalTabButton = getUi("terminal-tab-button");
const consoleTabButton = getUi("console-tab-button");
const timelineTabButton = getUi("timeline-tab-button");
// const tabCButton = document.querySelectorAll(".tab-c-button")
const terminalInput = getUi("terminal-input");

// APP LOAD : 

function appLoad(){   
    splitter();
    viewportSelection();
    viewportGrid(20,20)
    animation();
    tabHighlight();
    inspector();
    presetHighlight();
    console("Application Started...", "success"); 
    // shild({visible : true, opaque : true});
}

document.addEventListener("DOMContentLoaded",appLoad());

// TERMINAL : 

terminalInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        const { result } = terminal(terminalInput.value.trim());
        terminalInput.value = '';
        console(result);  // Exibe o objeto no console para depuração
    }
});


// WINDOW MENU : 

// FILE : 

const fileMenu = getUi("menu-file")

function handleMenuNew(){
    const fileMenus = [
        {
            name: "New",
            divisor: false,
            id: "new-menu"
        },
        {
            name: "Open",
            divisor: true,
            id: "HGT"
        },
        {
            name: "Save",
            divisor: false,
            id: "HGT"
        },
        {
            name: "Save as..",
            divisor: true,
            id: "HGT"
        },
        {
            name: "File Option",
            divisor: false,
            id: "HGT"
        },
        {
            name: "File Option",
            divisor: false,
            id: "HGT"
        }
    ];

    windowMenu(fileMenu, fileMenus);

    const menuNew = getUi("new-menu").addEventListener("click",function(){
        const openWindowCreate = windowCreate();
        openWindowCreate.createWindow();
    });

}

fileMenu.addEventListener("click",handleMenuNew)

// EDIT : 

const editMenu = getUi("menu-edit")

function handleMenuEdit(){
    const editMenus = [
        {
            name: "Desfazer",
            divisor: false,
            id: "new-menu"
        },
        {
            name: "Refazer",
            divisor: true,
            id: "HGT"
        },
        {
            name: "Selecionar",
            divisor: false,
            id: "HGT"
        },
        {
            name: "Save as..",
            divisor: true,
            id: "HGT"
        },
        {
            name: "edit Option",
            divisor: false,
            id: "HGT"
        },
        {
            name: "edit Option",
            divisor: false,
            id: "HGT"
        }
    ];

    windowMenu(editMenu, editMenus);

    // const menuEdit = getUi("new-menu").addEventListener("click",function(){
    //     const openWindowCreate = windowCreate();
    //     openWindowCreate.createWindow();
    // });

}

editMenu.addEventListener("click",handleMenuEdit)

// TAB : 

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



