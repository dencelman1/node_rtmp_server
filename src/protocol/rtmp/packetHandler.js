

export default (
    (f, s, z) => (
        (
            h, // this
            pp,
            t // pp.type
        ) => (
            console.log("packetH = "+t),

            f.includes(t)
            ? h.controlHandler( h, pp.payload, t )
            
            :
            s.includes(t)
            ? h.invokeHandler(
                h,
                pp,
                null,
                "",
                null
            )
            :
            z.includes(t)
            ? h.dataHandler(
                h,
                pp,
            )
            : 0
        )
    )
)(
    [
        1,
        2,
        3,
        5,
        6
    ],
    [
        17,
        20
    ],
    [
        8,
        9,
        15,
        18
    ]
)