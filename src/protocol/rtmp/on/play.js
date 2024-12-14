

export default (
    (cmd, status) => (_, im) => {
        var
            sn = "",
            sa = "",
            i = 0
        ;
        return (
            (
                _.p = (
                    "/" +
                    (sa = _.a) +
                    "/" +
                    (
                        sn =
                        _.n =
                            im
                            .streamName
                            .split("?")[0]
                    )
                )
            ),
            _.onOutput(
                status(
                    Buffer.from("020000000000060400000000000000000000", "hex"),
                    0x00,
                    (i = (_.sid = _.pp.stream_id))
                )
            ),
            _.sendStatusMessage(i, "status", "NetStream.Play.Reset", "Playing and resetting stream."),
            _.sendStatusMessage(i, "status", "NetStream.Play.Start", "Started playing stream."),
            _.sendMessage(
                _,
                0,
                i,
                6,
                18,
                _.rtmpDataCode,
                new _.RtmpPacket(0,0),
                cmd,
                {
                    cmd,
                    bool1: false,
                    bool2: false
                }
            ),
            _.onConnect(sa, sn, ""),
            _.onPlay(),
            _
        );
    }
)(
    "|RtmpSampleAccess",
    (r, st, id) => (
        r.writeUInt16BE(st, 12),
        r.writeUInt32BE(id, 14),
        r
    )
)