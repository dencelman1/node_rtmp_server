

export default (
    function(invokeMessage) {
        var sn = "";
        return (
            (typeof (sn = invokeMessage.streamName) === "string")
            &&
            (
                (sn = this.n = sn.split("?")[0]),
                (this.sid = this.pp.stream_id),
                this.respondPublish(),
                this.onConnect(this.a, sn, ""),
                this.onPush()
            )
        );        
    }
)