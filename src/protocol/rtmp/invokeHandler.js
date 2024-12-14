

export default (
    (
        t, // this
        pp,
        m, // null
        c // ""
    ) => (
        t[
            "onim"
            +
            (
                c = (
                    (
                        m = t.decodeAmf0Cmd(
                            t,

                            pp
                            .payload
                            .subarray(
                                (pp.type === 17 ? 1 : 0),
                                pp.length
                            )
                        )
                    )
                    .cmd
                )
            )[o]
            +
            c.substring(1)
        ](
            t,
            m
        )
    )
)