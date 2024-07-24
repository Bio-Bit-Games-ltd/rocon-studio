










// UI SHILD : 

import { getUi } from "../get-ui/get-ui.js";

const uiShild = getUi("ui-shild");

export function shild(settings){

    const opaqueColor = "rgba(0, 0, 0, 0.30)";

    const visible = settings.visible;
    const opaque = settings.opaque;
 
    visible ? uiShild.style.display = "flex" : uiShild.style.display = "none";
    opaque  ? uiShild.style.background = opaqueColor : uiShild.style.background = "none";
}