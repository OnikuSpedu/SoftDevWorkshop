// Shadman Rakib, Alif Abdullah, Alejandro Alonso
// SoftDev pd2
// K28 -- Getting more comfortable with the dev console and the DOM
// 2022-02-08t
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x;
};


//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };


var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};


var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};


var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

function fib(n){
    if (n <= 1){
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

function fact(n){
    if (n == 0){
        return 1;
    } else {
        return fact(n - 1) * n;
    }
}

function gcd(a, b) {
  let min = 0;
  if ( a <= b ) { min = a; }
  else { min = b; }
  while ( min >= 1 ) {
    if ( a % min == 0 && b % min == 0 ) { return min; }
    min --;
  }
}

const btn1 = document.getElementById("fibBtn");
btn1.addEventListener("click", (e) => {
  let fibEx = fib(10);
  addItem("The 10th fibonacci number is " + fibEx);
});

const btn2 = document.getElementById("factBtn");
btn2.addEventListener("click", (e) => {
  let factEx = fact(10);
  addItem("10! = " + factEx);
});

const btn3 = document.getElementById("gcdBtn");
btn3.addEventListener("click", (e) => {
  let gcdEx = gcd(99, 990);
  addItem("GCD of 990 and 99 is " + gcdEx);
});