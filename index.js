let canvas;
let ctx;
let angl_rng;

const WIDTH = 600;
const HEIGHT = 700;

function drawSquare(x, y, radius) {
    ctx.beginPath()
    ctx.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI)
    ctx.stroke();
  }

let angl = 0;

function setup() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    ctx.fillStyle = "white";
    ctx.strokeStyle = 'white';
    angl_rng = document.getElementById('angle');
    angl_rng.oninput = () => {
        // drawCircle(WIDTH / 2, HEIGHT / 2 - 180 + Number(angl_rng.value), 50)
        angl = Number(angl_rng.value) / 180 * Math.PI;
        // ctx.arc(, 30, 0, 2 * Math.PI);
        console.log(angl_rng.value);
    }
}