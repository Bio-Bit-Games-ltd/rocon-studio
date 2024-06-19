









// SPLITTERS :

const splitterA = document.getElementById("splitter-a");
const splitterB = document.getElementById("splitter-b");
const splitterC = document.getElementById("splitter-c");

// UI CONTAINERS :

const uiLeftContainer = document.getElementById("ui-left-container");
const uiCenterContainer = document.getElementById("ui-center-container");
const uiRightContainer = document.getElementById("ui-right-container");

export function splitter() {
    let startX;
    let startWidthLeft, startWidthCenter, startWidthRight;

    splitterA.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        startWidthLeft = uiLeftContainer.offsetWidth;
        startWidthCenter = uiCenterContainer.offsetWidth;
        startWidthRight = uiRightContainer.offsetWidth;
        document.addEventListener('mousemove', onMouseMoveA);
        document.addEventListener('mouseup', onMouseUp);
    });

    splitterB.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        startWidthCenter = uiCenterContainer.offsetHeight;
        startWidthRight = uiRightContainer.offsetHeight;
        document.addEventListener('mousemove', onMouseMoveB);
        document.addEventListener('mouseup', onMouseUp);
    });

    splitterC.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        startWidthRight = uiRightContainer.offsetWidth;
        document.addEventListener('mousemove', onMouseMoveC);
        document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMoveA(e) {
        const offsetX = e.clientX - startX;
        const newWidthLeft = startWidthLeft + offsetX;
        const newWidthCenter = startWidthCenter - offsetX;
        if (newWidthLeft > 0 && newWidthCenter > 0) {
            uiLeftContainer.style.width = `${newWidthLeft}px`;
            uiCenterContainer.style.width = `${newWidthCenter}px`;
        }
    }

    function onMouseMoveB(e) {
        const offsetX = e.clientX - startX;
        const newWidthCenter = startWidthCenter + offsetX;
        const newWidthRight = startWidthRight - offsetX;
        if (newWidthCenter > 0 && newWidthRight > 0) {
            uiCenterContainer.style.width = `${newWidthCenter}px`;
            uiRightContainer.style.width = `${newWidthRight}px`;
        }
    }

    function onMouseMoveC(e) {
        const offsetX = e.clientX - startX;
        const newWidthRight = startWidthRight - offsetX;
        if (newWidthRight > 0) {
            uiRightContainer.style.width = `${newWidthRight}px`;
        }
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMoveA);
        document.removeEventListener('mousemove', onMouseMoveB);
        document.removeEventListener('mousemove', onMouseMoveC);
        document.removeEventListener('mouseup', onMouseUp);
    }
}
