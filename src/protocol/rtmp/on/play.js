

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
            this.respondPlay(
                this,
                (this.sid = this.pp.stream_id)
            ),
            this.onConnect(sa, sn, ""),
            this.onPlay(),
            this
        );
    }
)