

export default (
    function(b) {
        var
            resp = {},
            cmd = null,
            d = null
        ;
        return (
            (cmd = this.amfXDecodeOne(b))
            &&
            (d = this.rtmpDataCode[resp.cmd = cmd.value])
            &&
            d
            .reduce(
                (n) => {
                    var r = null;
                    return (
                        (b.length && (r = this.amfXDecodeOne(b)))
                        ?
                        (
                            (b = b.slice(r.len)),
                            (resp[n] = r.value)
                        )
                        : b
                    )
                },
                b.slice(cmd.len)
            ),
            resp
        );
    }
)