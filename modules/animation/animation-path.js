










const fs = require('fs-extra');
const path = require('path');

async function animationPath(directory) {
    try {
        const files = await fs.readdir(directory);
        const animationFiles = files.filter(file => ['.json'].includes(path.extname(file).toLowerCase()));
        
        return animationFiles;
    } catch (error) {
        console.error(`Erro ao ler o diretório: ${error.message}`);
        throw error;
    }
}

// Exemplo de uso
const dirPath = 'C:/Users/Rhyan Eduardo/Documents/GitHub/rocon-studio/game/animation'; // Substitua pelo caminho do seu diretório

animationPath(dirPath)
    .then(files => console.log('Arquivos de animação:', files))
    .catch(error => console.error('Erro:', error));
