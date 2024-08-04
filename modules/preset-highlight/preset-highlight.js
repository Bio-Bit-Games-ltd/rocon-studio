const primaryColor = "#19A727";
const fontColor = "#D9D9D9";

const presetContainers = document.querySelectorAll(".preset-container");

export function presetHighlight() {

    function presetHighlightManage(presets) {
        if (presets.length > 0) {
            const firstPreset = presets[0];
            const firstPresetName = firstPreset.querySelector('.preset-name');

            if (firstPresetName) {
                firstPresetName.style.background = primaryColor;
                firstPresetName.style.color = fontColor;
            }
        } 

        presets.forEach(preset => {
            preset.addEventListener('click', () => {
                presets.forEach(btn => {
                    const presetName = btn.querySelector('.preset-name');
                    if (presetName) {
                        presetName.style.background = ""; 
                        presetName.style.color = ""; 
                    }
                });

                const presetName = preset.querySelector('.preset-name');
                if (presetName) {
                    presetName.style.background = primaryColor; 
                    presetName.style.color = fontColor; 
                }
            });
        });
    }

    presetHighlightManage(presetContainers);
}
