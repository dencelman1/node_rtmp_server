
let payload = pp.payload.subarray(pp.type === 17 ? 1 : 0, pp.length);

let invokeMessage = AMF.decodeAmf0Cmd(payload);

export default (
    (
        t, // this
        pp,
        m, // null
        c, // ""
        f // null
    ) => (
        (f = t[
            "onim"
            +
            (
                c = (
                    (
                        m = (
                            t.decodeAmf0Cmd(
                                t,

                                pp
                                .payload
                                .subarray(
                                    (pp.type === 17 ? 1 : 0),
                                    pp.length
                                )
                            )
                        )
                    )
                    .cmd
                )
            )
        ])
        ? f( t, m )
        : console.log("undefined INVOKE_MESSAGE[ CMD ] = " + c)
    )
)