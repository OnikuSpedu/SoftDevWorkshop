const c = document.getElementById("slate");
const dotButton = document.getElementById("dotButton");
const stopButton = document.getElementById("stopButton");

const ctx = c.getContext("2d");
ctx.fillStyle = "red";

var requestID;

var clear = (e) => ctx.clearRect(0,0,c.width, c.height);

var radius = 0;
var growing = true;

var drawDot = function () {
  if (requestID) {
      window.cancelAnimationFrame(requestID);
  }

  if (growing && radius >= c.width / 2) {
    growing = false;
  }

  if (!growing && radius <= 0) {
    growing = true;
  }

  if (growing) {
    radius++;
  } else {
    radius--;
  }

  clear();

  ctx.beginPath();
  ctx.arc(c.width / 2, c.height / 2, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();

  requestID = window.requestAnimationFrame(drawDot);
};

var stopIt = () => {
    console.log("stopIy invoked..");
    console.log(requestID);

    window.cancelAnimationFrame(requestID);
}

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);
