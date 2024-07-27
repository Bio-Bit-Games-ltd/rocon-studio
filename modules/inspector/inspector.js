











// INSPECTOR 

import { getUi } from "../get-ui/get-ui.js"
import { dropdown } from "../dropdown/dropdown.js";
import { console } from "../console/console.js";

const inspectorDropdownFontWheight = getUi("inspector-dropdown-font-wheight");

export function inspector(){






    function handleFontDropdown(){
        const options = [
            {
                name : "Bold",
                id : "bold-id",
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

        const fontBold = getUi("bold-id").addEventListener("click",function(){
            console("Font Bold Setado!","success");
        })

    }

    inspectorDropdownFontWheight.addEventListener("click",handleFontDropdown)

}