
export default (
    (t) => {
        var
            c = (
                (d) => (f) => (
                    f(t, d)
                )
            ),
            e = t.s.ee
        ;
        return (d) => (
            e.emit(2, c(d)),
            t.parserData(d),
            t
        );
    }
)