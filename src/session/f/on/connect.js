import {BroadcastServer} from "#index";


export default (
    function(
        a,
        n,
        sp // ""
    ) {
        return (
            this.ctx.broadcasts.set(
                (
                    sp = "/" + (this.streamApp = a) + "/" + (this.streamName = n)
                ),
                (
                    this.broadcast =
                        ( this.ctx.broadcasts )
                        .get(
                            this.streamPath = sp
                        )
                        ?? new BroadcastServer()
                )
            ),
            this
        );
    }
)