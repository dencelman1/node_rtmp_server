

export default (
    (cmd) => (_, im) => (
        _.sendMessage(
            _,
            0,
            0,
            3,
            20,
            _.rtmpCmdCode,
            new _.RtmpPacket(0,0),
            cmd,
            {
                cmd,
                transId: im.transId,
                cmdObj: null,
                info: _.ss++
            }
        )
    )
)(
    "_result"
)