

export default (
    (
        f, // fmt
        i, // cid
        o // null
    ) => (
        (
            (i >= 319)
            ? (
                (
                    (
                        o = Buffer.alloc(3)
                    )[0] = (
                        (f << 6) | 1
                    )
                ),
                (o[1] = (i - 64) & 0xff),
                (o[2] = ((i - 64) >> 8) & 0xff)
            )
            :
            (i >= 64)
            ? (
                (
                    (
                        o = Buffer.alloc(2)
                    )[0] = (
                        (f << 6) | 0
                    )
                ),
                (o[1] = (i - 64) & 0xff)
            )
            : (
                (
                    o = Buffer.alloc(1)
                )[0] = (
                    (f << 6) | i
                )
            )
        ),

        o
    )
)