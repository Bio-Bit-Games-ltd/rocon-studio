












const fs = require('fs');
const path = require('path');

export function applicationPath(absolutePath) {
    if (!path.isAbsolute(absolutePath)) {
        throw new Error('Path don\'t are absolute');
    }

    function listDir(dir) {
        const results = [];
        const items = fs.readdirSync(dir);

        items.forEach((item) => {
            const fullPath = path.join(dir, item);
            const stats = fs.statSync(fullPath);

            if (stats.isDirectory()) {
                results.push({
                    type: 'directory',
                    name: item,
                    contents: listDir(fullPath)
                });
            } else {
                results.push({
                    type: 'file',
                    name: item
                });
            }
        });

        return results;
    }

    const structure = listDir(absolutePath);
    return structure;
}

// const caminho = 'C:/Users/Rhyan Eduardo/Documents/GitHub/rocon-studio/game';
// try {
//     const estrutura = applicationPath(caminho);
//     console.log(JSON.stringify(estrutura, null, 2));
// } catch (error) {
//     console.error(error.message);
// }
