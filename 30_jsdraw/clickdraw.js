const c = document.getElementById("slate");

const ctx = c.getContext("2d");

var mode = "rect";

var toggleMode = (e) =>  (mode === "rect") ? mode = "circ" : mode = "rect";

var drawRect = function (e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;

    console.log(mouseX, mouseY)
}

var drawCircle = function (e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;

    console.log(mouseX, mouseY)
}

var draw = (e) => {
    (mode === "rect") ? drawRect(e) : drawCircle(e);
}

var wipeCanvas = () => {

}

c.addEventListener("click", draw)

const bToggler = document.getElementById("buttonToggle");
bToggler.addEventListener("click", toggleMode)

const clearB = document.getElementById("buttonClear");
clearB.addEventListener("click", toggleMode)