

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
            e.emit(6, c),
            (t.isPublisher = false)
        )
    }
    
)