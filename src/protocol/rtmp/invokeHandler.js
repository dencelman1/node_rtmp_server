

export default (
    function() {
        var
            pp = this.parserPacket,
            h = pp.header,
            m = this.decodeAmf0Cmd(
                pp.payload.subarray(
                    (h.type === this.RTMP_TYPE_FLEX_MESSAGE ? 1 : 0),
                    h.length
                )
            ),
            c = m.cmd
        ;
        return (

            this[
                "onIm" +
                c[o].toUpperCase() +
                c.substring(1)
            ](
                m
            ),

            this
        );
    }
)