







// WINDOW : 

import { getUi } from "../get-ui/get-ui.js";
import { shild } from "../shild/shild.js";
import { console } from "../console/console.js";

const mainView = getUi("main-container");

// WINDOW ICON DEFAULT SRC : 
const windowIconSrc = "../assets/icon/window-deffault-icon.svg";

export class Window {
    constructor(content, settings) {

        this.content = content;
        this.content.style.display = "flex";

        this.settings = settings;

        this.width = this.settings.width;
        this.height = this.settings.height;
        this.name = this.settings.name;
        this.icon = this.settings.icon;
        this.x = this.settings.x;
        this.y = this.settings.y;
        this.shild = this.settings.shild; 
        this.windowCloseVisible = this.settings.windowCloseVisible;
        this.resize = this.settings.resize;
        this.center = this.settings.center; 

        this.window = document.createElement("div");
        this.window.classList.add("window-container");
        this.window.style.width = `${this.width}px` || "200px";
        this.window.style.height = `${this.height}px` || "200px";
        this.window.style.left = `${this.x}px` || "auto";
        this.window.style.top = `${this.y}px` || "auto";
        this.window.style.position = "absolute";

        this.windowTitleBar = document.createElement("div");
        this.windowTitleBar.classList.add("window-title-bar");

        this.windowIcon = document.createElement("img");
        this.windowIcon.classList.add("window-icon");
        this.windowIcon.src = this.icon || windowIconSrc;

        this.windowName = document.createElement("span");
        this.windowName.classList.add("window-name");
        this.windowName.textContent = this.name || "Untitled";

        this.windowClose = document.createElement("button");
        this.windowClose.classList.add("window-close");

        this.windowCloseIcon = document.createElement("i");
        this.windowCloseIcon.classList.add("ri-close-circle-fill");

        this.windowContentContainer = document.createElement("div");
        this.windowContentContainer.classList.add("window-content-container");

        this.windowWidthLeft = document.createElement("div");
        this.windowWidthLeft.classList.add("window-width-left");

        this.windowWidthRight = document.createElement("div");
        this.windowWidthRight.classList.add("window-width-right");

        this.windowHeightTop = document.createElement("div");
        this.windowHeightTop.classList.add("window-height-top");

        this.windowHeightBottom = document.createElement("div");
        this.windowHeightBottom.classList.add("window-height-bottom");

        // SET : 

        this.windowClose.appendChild(this.windowCloseIcon);
        this.windowTitleBar.appendChild(this.windowClose);
        this.windowTitleBar.appendChild(this.windowName);
        this.windowTitleBar.appendChild(this.windowIcon);
        this.windowContentContainer.appendChild(this.content);
        this.window.appendChild(this.windowWidthLeft);
        this.window.appendChild(this.windowWidthRight);
        this.window.appendChild(this.windowHeightTop);
        this.window.appendChild(this.windowHeightBottom);
        this.window.appendChild(this.windowTitleBar);
        this.window.appendChild(this.windowContentContainer);

        this.windowTitleBar.addEventListener("mousedown", (e) => this.onDragStart(e));
        
        this.windowClose.addEventListener("click", () => this.removeWindow());

        this.windowClose.addEventListener("click", function(){
            mainView.removeChild(this.window);
            if (this.shild) {
                shild({ visible: false, opaque: false });
            }
        });

        if (this.center) {
            const mainViewRect = mainView.getBoundingClientRect();
            const windowRect = this.window.getBoundingClientRect();
            
            const x = (mainViewRect.width / windowRect.width);
            const y = (mainViewRect.height / windowRect.height) ;

            this.window.style.left = `${x }px`; 
            this.window.style.top = `${y }px`; 
        }
 
        if (this.center != false && (this.x != undefined || this.y != undefined)) {
            console("WINDOW_INSTANCE : You can't set a value for x or y when center is set to true!", "error");
        }
         
        switch (this.resize){
            case "horizontal":
                this.windowHeightBottom.style.display = "none";
                this.windowHeightTop.style.display = "none";
                this.windowWidthLeft.style.display = "flex";
                this.windowWidthRight.style.display = "flex";
            break;
            case "vertical" : 
                this.windowWidthLeft.style.display = "none";
                this.windowWidthRight.style.display = "none";
                this.windowHeightBottom.style.display = "flex";
                this.windowHeightTop.style.display = "flex";
            break;
            case "all" : 
                this.windowWidthLeft.style.display = "flex";
                this.windowWidthRight.style.display = "flex";
                this.windowHeightBottom.style.display = "flex";
                this.windowHeightTop.style.display = "flex";
            break;
        }
        
        if (this.windowCloseVisible){
            this.windowClose.style.display = "flex";
        } else {
            this.windowClose.style.display = "none";
        }

        this.addResizeListeners(); 
    }

    onDragStart(e) {
        this.offsetX = e.clientX - this.window.offsetLeft;
        this.offsetY = e.clientY - this.window.offsetTop;

        document.addEventListener("mousemove", this.onDragMove);
        document.addEventListener("mouseup", this.onDragEnd);
    }

    onDragMove = (e) => {
        this.window.style.left = `${e.clientX - this.offsetX}px`;
        this.window.style.top = `${e.clientY - this.offsetY}px`;
    }

    onDragEnd = () => {
        document.removeEventListener("mousemove", this.onDragMove);
        document.removeEventListener("mouseup", this.onDragEnd);
    }

    addResizeListeners() {
        this.windowWidthLeft.addEventListener("mousedown", (e) => this.onResizeStart(e, "left"));
        this.windowWidthRight.addEventListener("mousedown", (e) => this.onResizeStart(e, "right"));
        this.windowHeightTop.addEventListener("mousedown", (e) => this.onResizeStart(e, "top"));
        this.windowHeightBottom.addEventListener("mousedown", (e) => this.onResizeStart(e, "bottom"));
    }

    onResizeStart(e, direction) {
        e.preventDefault();
        this.currentDirection = direction;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.startWidth = parseInt(document.defaultView.getComputedStyle(this.window).width, 10);
        this.startHeight = parseInt(document.defaultView.getComputedStyle(this.window).height, 10);
        this.startLeft = parseInt(document.defaultView.getComputedStyle(this.window).left, 10);
        this.startTop = parseInt(document.defaultView.getComputedStyle(this.window).top, 10);

        document.addEventListener("mousemove", this.onResizeMove);
        document.addEventListener("mouseup", this.onResizeEnd);
    }

    onResizeMove = (e) => {
        switch (this.currentDirection) {
            case "left":
                const newWidthLeft = this.startWidth - (e.clientX - this.startX);
                if (newWidthLeft > 100) { // Minimum width
                    this.window.style.width = `${newWidthLeft}px`;
                    this.window.style.left = `${this.startLeft + (e.clientX - this.startX)}px`;
                }
                break;
            case "right":
                const newWidthRight = this.startWidth + (e.clientX - this.startX);
                if (newWidthRight > 100) { // Minimum width
                    this.window.style.width = `${newWidthRight}px`;
                }
                break;
            case "top":
                const newHeightTop = this.startHeight - (e.clientY - this.startY);
                if (newHeightTop > 100) { // Minimum height
                    this.window.style.height = `${newHeightTop}px`;
                    this.window.style.top = `${this.startTop + (e.clientY - this.startY)}px`;
                }
                break;
            case "bottom":
                const newHeightBottom = this.startHeight + (e.clientY - this.startY);
                if (newHeightBottom > 100) { // Minimum height
                    this.window.style.height = `${newHeightBottom}px`;
                }
                break;
        }
    }

    onResizeEnd = () => {
        document.removeEventListener("mousemove", this.onResizeMove);
        document.removeEventListener("mouseup", this.onResizeEnd);
    }

    createWindow() {
        mainView.appendChild(this.window);
        if (this.shild) {
            shild({ visible: true, opaque: true });
        } else {
            shild({ visible: false, opaque: false });
        }
    }

    removeWindow() {
        mainView.removeChild(this.window);
        if (this.shild) {
            shild({ visible: false, opaque: false });
        }
    }
}

