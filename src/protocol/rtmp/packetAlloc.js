

export default (
    function() {
        var
            pp = null,
            l = 0
        ;
        return (
            (
                ((pp = this.parserPacket).capacity < (l = pp.header.length))
                &&
                (
                    pp.payload =
                        Buffer.alloc(
                            pp.capacity =
                                l + 1024
                        )
                )
            ),
            this
        )
    }
)