

export default (
    (
        cmd,
        ack,
    ) => (_, im) => {
        var
            o = im.cmdObj,
            oe = o.objectEncoding,
            r = Buffer.from("0200000000000506000000000000000000", "hex"),
            s = 5000000
        ;
        _.a = (
            o.app = o.app.replace("/", "")
        );
        _.objectEncoding = oe === null ? 0: oe;

        _.onOutput(ack(
            _,
            s,
            Buffer.from("02000000000004050000000000000000", "hex")
        ));

        ack(
            _,
            s,
            r
        )[16] = 2;
        _.onOutput(r);
        
        _.onOutput(ack(
            _,
            0xffff, // _.RTMP_MAX_CHUNK_SIZE
            Buffer.from("02000000000004010000000000000000", "hex")
        ));

        return _.sendMessage(
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
                cmdObj: {
                    fmsVer: "FMS/3,0,1,123",
                    capabilities: 31
                },
                info: {
                    level: "status",
                    code: "NetConnection.Connect.Success",
                    description: "Connection succeeded.",
                    objectEncoding: _.objectEncoding
                }
            }
        );
    }
)(
    "_result",
    
    (_, s, r) => (
        r.writeUInt32BE(s, 12),
        r
    )
)