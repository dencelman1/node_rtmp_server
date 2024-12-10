

export default (
    function(
        r // this.rtmp
    ) {
        return (
            (r.onConnectCallback = this.onConnect),
            (r.onPlayCallback = this.onPlay),
            (r.onPushCallback = this.onPush),
            (r.onOutputCallback = this.onOutput),
            (r.onPacketCallback = this.onPacket),
            (r = this.socket).on("data", this.onData),
            r.on("close", this.onClose),
            r.on("error", this.onError),
            this
        );
    }
)