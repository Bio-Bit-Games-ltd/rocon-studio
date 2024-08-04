import { getUi } from "../get-ui/get-ui.js";
import { console } from "../console/console.js";

const terminalTab = getUi("terminal-tab");
const terminalInput = getUi("terminal-input");

// Defina as regras para o terminal
const myTerminalRuler = [
    {
        "startCommand": "/rocon",
        "rulerOption": "-",
        "rulerForPath": "text ="
    }
];

// Função para processar a entrada com base nas regras fornecidas
function processInput(inputValue, ruler) {
    const result = {
        command: null,
        options: [],
        keyValuePairs: []
    };

    let ruleMatched = false;

    ruler.forEach(rule => {
        // Regex para o comando
        const commandRegex = new RegExp(`^${rule.startCommand}\\b`);
        const commandMatch = inputValue.match(commandRegex);
        if (commandMatch) {
            result.command = commandMatch[0];
            ruleMatched = true;
        }

        // Regex para opções
        const optionRegex = new RegExp(`${rule.rulerOption}\\w+`, 'g');
        const optionMatches = inputValue.match(optionRegex);
        if (optionMatches) {
            result.options = optionMatches;
        }

        // Regex para pares chave-valor no formato 'text = "value"'
        const keyValueRegex = new RegExp(`(\\w+)\\s*=\\s*"([^"]*)"`, 'g');
        let keyValueMatch;
        while ((keyValueMatch = keyValueRegex.exec(inputValue)) !== null) {
            result.keyValuePairs.push({
                key: keyValueMatch[1],
                value: keyValueMatch[2]
            });
        }
    });

    return { result, ruleMatched };
}

// Função para processar a entrada e retornar um objeto com os valores ou exibir uma mensagem de erro
export function terminal(inputValue, ruler = myTerminalRuler) {
    const { result, ruleMatched } = processInput(inputValue, ruler);

    if (!ruleMatched) {
        const errorRow = document.createElement("span");
        errorRow.classList.add("terminal-error-row");
        errorRow.textContent = `Error: The input must start with a known command.`;
        terminalTab.insertBefore(errorRow, terminalInput);
        return { error: "The input must start with a known command." };
    }

    // Exibir as informações no terminal
    if (result.command) {
        const commandRow = document.createElement("span");
        commandRow.classList.add("terminal-sucess-row");
        commandRow.textContent = `Command: ${result.command}`;
        terminalTab.insertBefore(commandRow, terminalInput);
    }
    
    result.options.forEach(option => {
        const optionRow = document.createElement("span");
        optionRow.classList.add("terminal-sucess-row");
        optionRow.textContent = `flag: ${option}`;
        terminalTab.insertBefore(optionRow, terminalInput);
    });
    
    result.keyValuePairs.forEach(pair => {
        const keyValueRow = document.createElement("span");
        keyValueRow.classList.add("terminal-sucess-row");
        keyValueRow.textContent = `input: ${pair.key} as ${pair.value}`;
        terminalTab.insertBefore(keyValueRow, terminalInput);
    });

    terminalTab.scrollTo({
        top: terminalTab.scrollHeight,
        behavior: 'smooth'
    });

    return { result };
}
