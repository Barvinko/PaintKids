let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'yellow';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round'; 
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let sx = 0;
let sy = 0;
let isPainting = false;

canvas.addEventListener('mouseover', function (e) {
    isPainting = true;
    sx = e.offsetX;
    sy = e.offsetY;
});

canvas.addEventListener('mouseleave', function (e) {
    isPainting = false;
});

canvas.addEventListener('mousemove', function (e) {
    if (isPainting == true) {    
        let x = e.offsetX;
        let y = e.offsetY;

        ctx.moveTo(sx,sy);
        ctx.lineTo(x, y);
        ctx.stroke();
        sx = x;
        sy = y;
    }
});

