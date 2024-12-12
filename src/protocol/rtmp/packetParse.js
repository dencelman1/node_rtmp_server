

export default (
    function() {
        var
            fmt = this.parserBuffer[0] >> 6,
            cid = 0,
            header = null
        ;
        return (
            (
                this.parserPacket = (
                    this.inPackets.get(
                        cid = (
                            (this.parserBasicBytes === 2)
                            ? 64 + this.parserBuffer[1]
                            :
                            (this.parserBasicBytes === 3)
                            ? (64 + this.parserBuffer[1] + this.parserBuffer[2]) << 8
                            : this.parserBuffer[0] & 0x3f
                        )
                    )
                    ?? new this.RtmpPacket(fmt, cid)
                )
            ),
            this.inPackets.set(cid, this.parserPacket),
            ((header = this.parserPacket.header).fmt = fmt),
            (header.cid = cid),
            this.chunkMessageHeaderRead(),
            this
        );
    }
)