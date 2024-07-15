











const alertColor = "#A71919";
const successColor = "#19A727";

export function console(text,type){

    const consoleTabButton = document.getElementById("console-tab-button");
    const consoleTab = document.getElementById("console-tab");

    const logRow = document.createElement("span");
    logRow.className = "log-row";

    if (type === "error"){
        consoleTabButton.style.borderColor = alertColor;
    }

    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds(); 
    
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
    
        return `${hours}:${minutes}:${seconds}`;
    }
    
    logRow.textContent = `${text} [${getCurrentTime()}]`;

    switch (type){
        case "log":
            logRow.style.color = "";
        break;
        case "error":
            logRow.style.color = alertColor;
        break;
        case "success":
            logRow.style.color = successColor;
        break;
    }
    
    consoleTab.appendChild(logRow);

    consoleTab.scrollTo({
        top: consoleTab.scrollHeight,
        behavior: 'smooth'
    });

}