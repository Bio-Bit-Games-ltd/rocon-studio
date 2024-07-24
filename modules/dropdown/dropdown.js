











// DROPDOWN : 

import { getUi } from "../get-ui/get-ui.js";
import { shild } from "../shild/shild.js";

const uiDropdown = getUi("ui-dropdown");
let dropdownTimeout;

export function dropdown(dropdownTo,option) {

    uiDropdown.innerHTML = ""; 
    uiDropdown.style.display = "flex";
    shild({visible: true, opaque: false});

    const dropdownToRect = dropdownTo.getBoundingClientRect();
    const getHeight = dropdownToRect.height;
    const getTop = dropdownToRect.top;
    const setToBottom = getTop + getHeight + 3;

    uiDropdown.style.left = `${dropdownToRect.left - 1}px`;
    uiDropdown.style.width = `${dropdownToRect.width}px`;
    uiDropdown.style.top = `${setToBottom}px`;

    if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
    }

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

