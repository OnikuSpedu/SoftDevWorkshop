function fact(n){
    if (n == 0){
        return 1
    } else {
        return fact(n - 1) * n
    }
}

function fib(n){
    if (n <= 1){
        return n
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}

console.log(fact(3))
console.log(fib(3))