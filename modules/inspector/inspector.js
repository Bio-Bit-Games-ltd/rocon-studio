











// INSPECTOR 

import { getUi } from "../get-ui/get-ui.js"
import { dropdown } from "../dropdown/dropdown.js";

const inspectorDropdownFontWheight = getUi("inspector-dropdown-font-wheight");

export function inspector(){

    inspectorDropdownFontWheight.addEventListener("click",function(){
        const options = [
            {
            name : "Bold",
            id : "ggt",
            icon : "ri-home-3-line"
            },
            {
                name : "Regular",
                id : "ggt",
                icon : "ri-home-3-line"
            },
            {
                name : "Black",
                id : "ggt",
                icon : "ri-home-3-line"
            }
        ]
        dropdown(inspectorDropdownFontWheight,options);
    });

}