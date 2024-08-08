










// TAB LOAD : 

import { getUi } from "../get-ui/get-ui.js";
import { tabManage } from "../tab-manage/tab-manage.js";
import { console } from "../console/console.js";

const consoleTab = getUi("console-tab");
const timelineTab = getUi("timeline-tab");
const terminalTab = getUi("terminal-tab");
const twoDStage = getUi("viewport-tab");
const inspectorTab = getUi("inspector-tab");
const explorerTab = getUi("explorer-tab");

export function tabLoad(){
 
    const tabList = [
        {
            name: "Sequence",
            content: timelineTab,
            ID: "TABTL",
            location: "bottom"
        },
        {
            name: "Console",
            content: consoleTab,
            ID: "TABTgL",
            location: "bottom"
        },
        {
            name: "Terminal",
            content: terminalTab,
            ID: "TABTgL",
            location: "bottom"
        },
        {
            name: "2D Stage",
            content: twoDStage,
            ID: "TABTgL",
            location: "top"
        },
        {
            name: "Inspector",
            content: inspectorTab,
            ID: "TABTgL",
            location: "right"
        },
        {
            name: "Explorer",
            content: explorerTab,
            ID: "TABTgL",
            location: "left"
        }
    ];

    tabManage(tabList);

    return { 
        tabList:tabList
    }

}