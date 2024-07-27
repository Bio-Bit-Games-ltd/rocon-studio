











// DROPDOWN : 

import { getUi } from "../get-ui/get-ui.js";
import { shild } from "../shild/shild.js";

const uiDropdown = getUi("ui-dropdown");
const mainView = getUi("main-container");
let dropdownTimeout;

export function dropdown(dropdownTo,option) {

    uiDropdown.innerHTML = ""; 
    uiDropdown.style.display = "flex";
    shild({visible: true, opaque: false});

    let dropdownToRect = dropdownTo.getBoundingClientRect();
    let uiDropdownRect = uiDropdown.getBoundingClientRect();
    let mainViewRect = mainView.getBoundingClientRect();

    const getHeight = dropdownToRect.height;
    const getTop = dropdownToRect.top;
    const setToBottom = getTop + getHeight + 3;

    uiDropdown.style.left = `${dropdownToRect.left - 1}px`;
    uiDropdown.style.width = `${dropdownToRect.width}px`;
    uiDropdown.style.top = `${setToBottom}px`;

    const mainViewHeight = mainViewRect.height;
    const newDropdownHeight = mainView.offsetHeight - uiDropdown.offsetTop - 29;

    if (uiDropdownRect.bottom < mainView.offsetHeight) {
        uiDropdown.style.height = "auto";
    }else {
        uiDropdown.style.height = `${newDropdownHeight}px`;
    }

    if (dropdownTimeout) { clearTimeout(dropdownTimeout); }

    dropdownTimeout = setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
    }, 100);
 
    for (let i = 0; i < option.length; i++) {
        const dropdownButton = document.createElement("button");
        dropdownButton.classList.add("ui-dropdown-button");
        dropdownButton.textContent = option[i].name;
        dropdownButton.id = option[i].id;
    
        const dropdownIcon = document.createElement("i");
        dropdownIcon.classList.add(option[i].icon);
    
        dropdownButton.appendChild(dropdownIcon);
        uiDropdown.appendChild(dropdownButton);
    }

    window.addEventListener('resize', () => {
        uiDropdown.style.display = "none";
        shild({visible: false, opaque: false});
    });
    
}

function handleClickOutside(event) {
    if (!uiDropdown.contains(event.target)) {
        uiDropdown.style.display = "none";
        shild({visible: false, opaque: false});
        document.removeEventListener('click', handleClickOutside);
    }else{
        uiDropdown.style.display = "none";
        shild({visible: false, opaque: false});
        document.removeEventListener('click', handleClickOutside);
    }
}

