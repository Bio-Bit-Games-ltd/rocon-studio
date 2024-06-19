












export function viewportGrid(viewportGridWidth,viewportGridHeight){
    const canvas = document.getElementById('viewport');
    const ctx = canvas.getContext('2d');
    let isDragging = false;
    let startX, startY;
    let offsetX = 0, offsetY = 0;
    let lineThickness = 0.5;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawGrid(viewportGridWidth, viewportGridHeight);  // Example grid cell size
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

    canvas.addEventListener('contextmenu', event => event.preventDefault());

    canvas.addEventListener('mousedown', event => {
        if (event.button === 2) {
            isDragging = true;
            startX = event.clientX;
            startY = event.clientY;
        }
    });

    canvas.addEventListener('mousemove', event => {
        if (isDragging) {
            offsetX += event.clientX - startX;
            offsetY += event.clientY - startY;
            startX = event.clientX;
            startY = event.clientY;
            drawGrid(viewportGridWidth, viewportGridHeight);  // Example grid cell size
            canvas.style.cursor = "move";
        }
    });

    canvas.addEventListener('mouseup', () => {
        isDragging = false;
        canvas.style.cursor = "";
    });

    canvas.addEventListener('mouseleave', () => {
        isDragging = false;
        canvas.style.cursor = "";
    });

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
}