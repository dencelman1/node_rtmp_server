

export default (
    function() {
        var i = this.streamId;
        this.sendStreamStatus(this.STREAM_BEGIN, i);
        this.sendStatusMessage(i, "status", "NetStream.Play.Reset", "Playing and resetting stream.");
        this.sendStatusMessage(i, "status", "NetStream.Play.Start", "Started playing stream.");
        this.sendRtmpSampleAccess();
        return this;
    }
)