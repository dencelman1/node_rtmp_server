

export default (
    (
        t,
        i // this.sid
    ) => (
        t.sendStreamStatus(0x00, i),
        t.sendStatusMessage(i, "status", "NetStream.Play.Reset", "Playing and resetting stream."),
        t.sendStatusMessage(i, "status", "NetStream.Play.Start", "Started playing stream."),
        t.sendRtmpSampleAccess()
    )
)