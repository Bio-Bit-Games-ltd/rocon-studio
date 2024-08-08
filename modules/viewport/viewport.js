export function viewport(viewportSettings) {
    let viewportGridWidth = viewportSettings.gridWidth;
    let viewportGridHeight = viewportSettings.gridHeight;;

    const canvas = document.getElementById('viewport');
    const ctx = canvas.getContext('2d');
    let isDragging = false;
    let startX, startY;
    let offsetX = 0, offsetY = 0;
    let lineThickness = 0.3;
    let isSelecting = false;
    let endX, endY;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawGrid(viewportGridWidth, viewportGridHeight);
    }

    function drawGrid(cellWidth, cellHeight) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.strokeStyle = '#ddd';
        ctx.lineWidth = lineThickness;

        for (let x = offsetX % cellWidth; x < canvas.width; x += cellWidth) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
        }

        for (let y = offsetY % cellHeight; y < canvas.height; y += cellHeight) {
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
        }

        ctx.stroke();
    }

    function drawSelectionRect() {
        let minX = Math.min(startX, endX);
        let minY = Math.min(startY, endY);
        let width = Math.abs(endX - startX);
        let height = Math.abs(endY - startY);

        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1;
        ctx.strokeRect(minX, minY, width, height);
        ctx.setLineDash([]); // Reset line dash
    }

    function onMouseDown(event) {
        const rect = canvas.getBoundingClientRect();
        if (event.button === 2) { // Right-click for dragging
            isDragging = true;
            startX = event.clientX - rect.left;
            startY = event.clientY - rect.top;
        } else { // Left-click for selection
            isSelecting = true;
            startX = event.clientX - rect.left;
            startY = event.clientY - rect.top;
            endX = startX;
            endY = startY;
        }
        event.preventDefault(); // Prevent default context menu for right-click
    }

    function onMouseMove(event) {
        const rect = canvas.getBoundingClientRect();
        if (isDragging) {
            const dx = event.clientX - rect.left - startX;
            const dy = event.clientY - rect.top - startY;
            offsetX += dx;
            offsetY += dy;
            startX = event.clientX - rect.left;
            startY = event.clientY - rect.top;
            drawGrid(viewportGridWidth, viewportGridHeight);
            canvas.style.cursor = "move";
        } else if (isSelecting) {
            endX = event.clientX - rect.left;
            endY = event.clientY - rect.top;
            drawGrid(viewportGridWidth, viewportGridHeight); // Redraw grid
            drawSelectionRect(); // Draw selection rectangle
        }
    }

    function onMouseUp(event) {
        if (isDragging) {
            isDragging = false;
            canvas.style.cursor = "";
        } else if (isSelecting) {
            isSelecting = false;
            drawGrid(viewportGridWidth, viewportGridHeight); // Redraw grid
        }
    }

    canvas.addEventListener('contextmenu', event => event.preventDefault());
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mouseleave', onMouseUp);

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
}
