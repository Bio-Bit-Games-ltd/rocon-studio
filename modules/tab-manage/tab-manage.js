










import { getUi } from "../get-ui/get-ui.js";
import { console } from "../console/console.js";

const uiLeftContainerTabRow = getUi("ui-left-container-tab-row");
const uiTopContainerTabRow = getUi("ui-top-container-tab-row");
const uiBottomContainerTabRow = getUi("ui-bottom-container-tab-row");
const uiRightContainerTabRow = getUi("ui-right-container-tab-row");

const uiLeftContainer = getUi("tab-left");
const uiTopContainer = getUi("tab-top");
const uiBottomContainer = getUi("tab-bottom");
const uiRightContainer = getUi("tab-right");

const addTabButton = getUi("add-tab-button");

const tabContentsByLocation = {
    left: [],
    top: [],
    bottom: [],
    right: []
};

const tabButtonsByLocation = {
    left: [],
    top: [], 
    bottom: [],
    right: []
};

export function tabManage(tabList) {
    tabList.forEach(tab => {
        const tabButton = document.createElement("button");
        tabButton.classList.add("tab-button");
        tabButton.textContent = tab.name;

        const tabLocation = tab.location;
        const tabContent = tab.content;

        tabContent.style.display = "none";

        tabButton.addEventListener("click", function() {
            tabContentsByLocation[tabLocation].forEach(content => {
                content.style.display = "none";
            });

            tabContent.style.display = "flex";

            tabButtonsByLocation[tabLocation].forEach(button => {
                button.classList.remove("active-tab");
            });

            tabButton.classList.add("active-tab");
        });

        if (["left", "right", "bottom", "top"].indexOf(tabLocation) === -1) {
            console(`LAYOUT_INSERT_TAB_ERROR: in tab '${tab.name}', error to insert the tab in the layout. You need to follow the 'location' specifications!`, "error");
            return;
        }

        switch(tabLocation){
            case "left":
                uiLeftContainerTabRow.appendChild(tabButton);
                uiLeftContainer.appendChild(tabContent);
                tabButtonsByLocation.left.push(tabButton);
                tabContentsByLocation.left.push(tabContent);
                break;
            case "top":
                uiTopContainerTabRow.insertBefore(tabButton,addTabButton);
                uiTopContainer.appendChild(tabContent);
                tabButtonsByLocation.top.push(tabButton);
                tabContentsByLocation.top.push(tabContent);
                break;
            case "bottom":
                uiBottomContainerTabRow.appendChild(tabButton);
                uiBottomContainer.appendChild(tabContent);
                tabButtonsByLocation.bottom.push(tabButton);
                tabContentsByLocation.bottom.push(tabContent);
                break;
            case "right":
                uiRightContainerTabRow.appendChild(tabButton);
                uiRightContainer.appendChild(tabContent);
                tabButtonsByLocation.right.push(tabButton);
                tabContentsByLocation.right.push(tabContent);
                break;
        }
    });

    Object.keys(tabContentsByLocation).forEach(layout => {
        if (tabContentsByLocation[layout].length > 0) {
            tabContentsByLocation[layout][0].style.display = "flex";
            tabButtonsByLocation[layout][0].classList.add("active-tab");
        }
    });
}
