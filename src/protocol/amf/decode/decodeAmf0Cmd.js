

export default (
    function(b) {
        var
            b = b,
            resp = {},
            cmd = this.amfXDecodeOne(b),
            d = null,
            v = cmd.value
        ;
        return (
            (d = this.rtmpCmdCode[resp.cmd = v])
            &&
            (
                d
                .reduce(
                    (b, n) => {
                        var r = null;
                        return (
                            (b.length)
                            ? (
                                (
                                    resp[n] = (
                                        (
                                            r = this.amfXDecodeOne(b)
                                        )
                                        .value
                                    )
                                ),
                                b.slice( r.len )
                            )
                            : b
                        )
                    },
                    b.slice(cmd.len)
                )
            ),
            resp
        );
    }
)