

export default (
    function(invokeMessage) {
        var sn = "";
        if (typeof (sn = invokeMessage.streamName) === "string") {
            (sn = this.n = sn.split("?")[0]);
            this.streamId = this.parserPacket.header.stream_id;
            this.respondPublish();
            this.onConnect(this.a, sn, "");
            this.onPush();
        }
        return this;
    }
)