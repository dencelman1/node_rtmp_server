

export default (
    (t) => {
        var
            c = (
                (b) => (f) => (
                    f(t, b)
                )
            ),
            e = t.s.ee
        ;
        return (b) => (
            e.emit(4, c(b)),

            t.sc.write(b)
        )
    }
)