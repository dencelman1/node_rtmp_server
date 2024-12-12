

export default (
    function(im) {
        var
            sn = "",
            sa = ""
        ;
        return (
            (
                this.p = (
                    "/" +
                    (sa = this.a) +
                    "/" +
                    (
                        sn =
                        this.n =
                            im
                            .streamName
                            .split("?")[0]
                    )
                )
            ),
            (this.streamId = this.parserPacket.header.stream_id),
            this.respondPlay(),
            this.onConnect(sa, sn, ""),
            this.onPlay(),
            this
        );
    }
)