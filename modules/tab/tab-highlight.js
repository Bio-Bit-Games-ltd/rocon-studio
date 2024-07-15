











const primaryColor = "#19A727";  
const tertiaryColor = "#161616";  

const tabCButton = document.querySelectorAll(".tab-c-button");

export function tabHighlight() {
    function tabCHighlightManage(buttons) {
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(btn => {
                    btn.style.borderColor = '#D9D9D9'
                    btn.style.background = '#111111'; 
                }); 
                button.style.borderColor = primaryColor; 
                button.style.background = tertiaryColor; 
            });
        });
    }
    
    tabCHighlightManage(tabCButton); 
}



