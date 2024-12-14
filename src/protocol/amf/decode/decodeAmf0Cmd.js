

export default (
    (reduce) => (_, b) => {
        var
            resp = {},
            cmd = _.amfXDecodeOne(b),
            d = null,
            v = cmd.value
        ;
        return (
            (d = _.rtmpCmdCode[resp.cmd = v])
            &&
            (
                d
                .reduce(
                    reduce(_, resp),
                    b.slice(cmd.len)
                )
            ),
            resp
        );
    }
)(
    (_, resp) => (
        (b, n) => {
            var r = null;
            return (
                (b.length > 0)
                && (
                   
                    (
                        b =
                            b.slice(
                                (
                                    r = _.amfXDecodeOne(b)
                                )
                                .len
                            )
                    ),
                    (
                        resp[n] = r.value
                    )
                ),
                b
            )
        }
    )
)