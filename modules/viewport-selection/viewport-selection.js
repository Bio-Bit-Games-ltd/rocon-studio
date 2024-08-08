













export function viewportSelection() {
    let canvas = document.getElementById("viewport");
    let selectionBox = canvas.getContext("2d");
    let isDragging = false;
    let startX, startY;
    let endX, endY;

    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', onMouseUp);

    function onMouseDown(event) {
        isDragging = true;
        startX = event.clientX - canvas.getBoundingClientRect().left;
        startY = event.clientY - canvas.getBoundingClientRect().top;
        endX = startX;
        endY = startY;
    }

    function onMouseMove(event) {
        if (!isDragging) return;

        endX = event.clientX - canvas.getBoundingClientRect().left;
        endY = event.clientY - canvas.getBoundingClientRect().top;

        drawSelectionRect();
    }

    function onMouseUp(event) {
        isDragging = false;
        drawSelectionRect();
    }

    function drawSelectionRect() {
        selectionBox.clearRect(0, 0, canvas.width, canvas.height);

        if (!isDragging) return;

        let minX = Math.min(startX, endX);
        let minY = Math.min(startY, endY);
        let width = Math.abs(endX - startX);
        let height = Math.abs(endY - startY);

        selectionBox.setLineDash([3, 3]); // Define o estilo dashed
        selectionBox.strokeStyle = 'white';
        selectionBox.lineWidth = 1;
        selectionBox.strokeRect(minX, minY, width, height);
    }

    // Inicialização
    function init() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    init();
};
