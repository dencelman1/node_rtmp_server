

export default (
    (t) => {
        var
            c = (
                (p) => (f) => (
                    f(t, p)
                )
            ),
            e = t.s.ee
        ;
        return (p) => (
            e.emit(5, c(p))
        )
    }
)