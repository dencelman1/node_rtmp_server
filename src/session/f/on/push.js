

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
        return () => (
            e.emit(7, c),
            (t.isPublisher = true)
        )
    }
)