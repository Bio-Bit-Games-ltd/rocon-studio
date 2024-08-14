









// RESIZE HANDLE : 

import { getUi } from "../../get-ui/get-ui.js";

const resizeType = {
    type : "singleObject"
}

export function resizeHandle(settings = resizeType) {

    const handleType = settings.type;

    const viewportUI = getUi("viewport-ui");
    const resizeHandleRect = getUi("resize-handle-rect");

    const anchorPoint = getUi("anchor-point");
    const rotationHandleRight = getUi("rotation-handle-right");
    const rotationHandleLeft = getUi("rotation-handle-left");
    const rotationHandleTop = getUi("rotation-handle-top");
    const rotationHandleBottom = getUi("rotation-handle-bottom");

    const handles = {
        top: getUi("handle-top"),
        topLeft: getUi("handle-top-left"),
        topRight: getUi("handle-top-right"),
        leftCenter: getUi("handle-left-center"),
        bottomLeft: getUi("handle-bottom-left"),
        bottom: getUi("handle-bottom"),
        bottomRight: getUi("handle-bottom-right"),
        rightCenter: getUi("handle-right-center")
    };

    switch(handleType){
        case "singleObject":
            handles.top.style.display = "flex";
            handles.topLeft.style.display = "flex";
            handles.topRight.style.display = "flex";
            handles.leftCenter.style.display = "flex";
            handles.bottomLeft.style.display = "flex";
            handles.bottom.style.display = "flex";
            handles.bottomRight.style.display = "flex";
            handles.rightCenter.style.display = "flex";
        break;
        case "objectArray" :    
        handles.topLeft.style.display = "none";
        handles.topRight.style.display = "none";
        handles.bottomLeft.style.display = "none";
        handles.bottomRight.style.display = "none";
        
        handles.top.style.width = "30px";
        handles.bottom.style.width = "30px";
        handles.leftCenter.style.height = "30px";
        handles.rightCenter.style.height = "30px";
        break;
    }

    let currentHandle = null;
    let startX = 0;
    let startY = 0;
    let startWidth = 0;
    let startHeight = 0;
    let startLeft = 0;
    let startTop = 0;
    let isResizing = false;
    let isMoving = false;

    function onMouseMove(event) {
        if (isResizing) {
            const dx = event.clientX - startX;
            const dy = event.clientY - startY;

            switch (currentHandle) {
                case handles.top:
                    resizeHandleRect.style.height = `${Math.max(startHeight - dy, 20)}px`;
                    resizeHandleRect.style.top = `${startTop + dy}px`;
                    break;
                case handles.topLeft:
                    resizeHandleRect.style.width = `${Math.max(startWidth - dx, 20)}px`;
                    resizeHandleRect.style.height = `${Math.max(startHeight - dy, 20)}px`;
                    resizeHandleRect.style.top = `${startTop + dy}px`;
                    resizeHandleRect.style.left = `${startLeft + dx}px`;
                    break;
                case handles.topRight:
                    resizeHandleRect.style.width = `${Math.max(startWidth + dx, 20)}px`;
                    resizeHandleRect.style.height = `${Math.max(startHeight - dy, 20)}px`;
                    resizeHandleRect.style.top = `${startTop + dy}px`;
                    break;
                case handles.leftCenter:
                    resizeHandleRect.style.width = `${Math.max(startWidth - dx, 20)}px`;
                    resizeHandleRect.style.left = `${startLeft + dx}px`;
                    break;
                case handles.bottomLeft:
                    resizeHandleRect.style.width = `${Math.max(startWidth - dx, 20)}px`;
                    resizeHandleRect.style.height = `${Math.max(startHeight + dy, 20)}px`;
                    resizeHandleRect.style.left = `${startLeft + dx}px`;
                    break;
                case handles.bottom:
                    resizeHandleRect.style.height = `${Math.max(startHeight + dy, 20)}px`;
                    break;
                case handles.bottomRight:
                    resizeHandleRect.style.width = `${Math.max(startWidth + dx, 20)}px`;
                    resizeHandleRect.style.height = `${Math.max(startHeight + dy, 20)}px`;
                    break;
                case handles.rightCenter:
                    resizeHandleRect.style.width = `${Math.max(startWidth + dx, 20)}px`;
                    break;
            }
        } else if (isMoving) {
            const dx = event.clientX - startX;
            const dy = event.clientY - startY;
            resizeHandleRect.style.left = `${startLeft + dx}px`;
            resizeHandleRect.style.top = `${startTop + dy}px`;
            resizeHandleRect.style.cursor = "move";
        }
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        isResizing = false;
        isMoving = false;
        currentHandle = null;
        resizeHandleRect.style.cursor = "";
    }

    function onMouseDown(event, handle) {
        startX = event.clientX;
        startY = event.clientY;
        startWidth = parseInt(getComputedStyle(resizeHandleRect).width, 10);
        startHeight = parseInt(getComputedStyle(resizeHandleRect).height, 10);
        startLeft = parseInt(getComputedStyle(resizeHandleRect).left, 10);
        startTop = parseInt(getComputedStyle(resizeHandleRect).top, 10);

        if (handle === resizeHandleRect) {
            isMoving = true;
        } else {
            currentHandle = handle;
            isResizing = true;
        } 

        viewportUI.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    // Add mousedown event listener to the rectangle itself for moving
    resizeHandleRect.addEventListener('mousedown', (event) => onMouseDown(event, resizeHandleRect));

    // Add mousedown event listeners to the handles for resizing
    Object.values(handles).forEach(handle => {
        handle.addEventListener('mousedown', event => onMouseDown(event, handle));
    });
}


