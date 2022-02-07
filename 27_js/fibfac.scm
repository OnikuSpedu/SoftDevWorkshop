(define fact
    (lambda (n)
        (if (= n 0)
        1
        (* (fact(- n 1)) n)
        )
    )
)

(define fib
    (lambda (n)
        (if (<= n 1)
        n
        (+ (fib(- n 1)) (fib(- n 2)))
        )
    )
)