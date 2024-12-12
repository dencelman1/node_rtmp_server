

export default (
    (t) => {
        var
            c = (
                (a, n) => (f) => (
                    f(t, a, n)
                )
            ),
            e = t.s.ee
        ;
        return (a, n) => (
            e.emit(1, c(a, n)),

            (
                t.p = (
                    "/" +
                    ( t.a = a ) +
                    "/" +
                    ( t.n = n )
                )
            )
        )
    }
)
