










import { getUi } from "../get-ui/get-ui.js";

const terminalTab = getUi("terminal-tab");
const terminalInput = getUi("terminal-input");

export function terminal(inputValue) {
    const terminalLogRow = document.createElement("span");
    terminalLogRow.classList.add("terminal-log-row");

    terminalLogRow.textContent = `${inputValue}`;

    terminalTab.insertBefore(terminalLogRow, terminalInput);
}
