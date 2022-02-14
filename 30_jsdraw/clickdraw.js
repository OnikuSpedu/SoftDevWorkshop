const c = document.getElementById("slate");
const bToggler = document.getElementById("buttonToggle");
const clearB = document.getElementById("buttonClear");

const ctx = c.getContext("2d");

const RECTANGLE = "rect";
const CIRCLE = "circ";

var mode = RECTANGLE;

var toggleMode = (e) => {
  if (mode === RECTANGLE) {
    bToggler.innerText = "Circle";
    mode = CIRCLE;
  } else {
    bToggler.innerText = "Rectangle";
    mode = RECTANGLE;
  }
};

var drawRect = function (e) {
  var mouseX = e.offsetX;
  var mouseY = e.offsetY;

  ctx.beginPath();
  ctx.rect(mouseX, mouseY, 50, 100);
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();

  console.log("mouse click registered", mouseX, mouseY);
};

var drawCircle = function (e) {
  var mouseX = e.offsetX;
  var mouseY = e.offsetY;

  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 50, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();

  console.log("mouse click registered", mouseX, mouseY);
};

var draw = (e) => {
  mode === "rect" ? drawRect(e) : drawCircle(e);
};

var wipeCanvas = () => {
  ctx.clearRect(0, 0, c.width, c.height);
};

c.addEventListener("click", draw);

bToggler.addEventListener("click", toggleMode);
clearB.addEventListener("click", wipeCanvas);
