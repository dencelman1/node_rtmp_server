

export default (
    (t) => {
        var
            c = (
                (f) => (
                    f(t)
                )
            ),
            e = t.s.ee
        ;
        return (E) => (
            e.emit(3, c),
            console.error(E),
            t
        )
    }
);