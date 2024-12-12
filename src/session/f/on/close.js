

export default (
    (t) => {
        var
            c = (
                (f) => f(t)
            ),
            e = t.s.ee
        ;
        return () => (
            e.emit(0, c),

            console.log(`[ RTMP ]: closed ${t.ip}`)
        )
    }
)