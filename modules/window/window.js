







// WINDOW : 

import { getUi } from "../get-ui/get-ui.js";
import { shild } from "../shild/shild.js";

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

        this.window = document.createElement("div");
        this.window.classList.add("window-container");
        this.window.style.width = `${this.width}px` || "200px";
        this.window.style.height = `${this.height}px` || "200px";
        this.window.style.left = `${this.x}px` || "200px";
        this.window.style.top = `${this.y}px` || "200px";
        this.window.style.position = "absolute"; // Ensure the window is positioned absolutely

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

        // SET : 

        this.windowClose.appendChild(this.windowCloseIcon);
        this.windowTitleBar.appendChild(this.windowClose);
        this.windowTitleBar.appendChild(this.windowName);
        this.windowTitleBar.appendChild(this.windowIcon);
        this.windowContentContainer.appendChild(this.content);
        this.window.appendChild(this.windowTitleBar);
        this.window.appendChild(this.windowContentContainer);

        this.windowTitleBar.addEventListener("mousedown", (e) => this.onDragStart(e));
        
        this.windowClose.addEventListener("click", () => this.removeWindow());

        this.windowClose.addEventListener("click",function(){
            mainView.removeChild(this.window);
            if (this.shild) {
                shild({ visible: false, opaque: false });
            }
        });

        if (this.windowCloseVisible){
            this.windowClose.style.display = "flex";
        }else{
            this.windowClose.style.display = "none";
        }
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
