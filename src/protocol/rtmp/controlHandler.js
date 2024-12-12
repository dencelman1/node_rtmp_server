

export default (
    function() {
        var payload = this.parserPacket.payload;
        switch (this.parserPacket.header.type) {
            case this.RTMP_TYPE_ABORT:
            case this.RTMP_TYPE_ACKNOWLEDGEMENT:
            case this.RTMP_TYPE_SET_PEER_BANDWIDTH:
                break;
            case this.RTMP_TYPE_SET_CHUNK_SIZE:
                this.inChunkSize = payload.readUInt32BE();
                break;
            case this.RTMP_TYPE_WINDOW_ACKNOWLEDGEMENT_SIZE:
                this.ackSize = payload.readUInt32BE();
                break;
        }
        return this;
    }
);

