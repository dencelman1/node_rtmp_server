

export default (
    function() {
        switch (this.parserPacket.header.type) {
            case this.RTMP_TYPE_SET_CHUNK_SIZE:
            case this.RTMP_TYPE_ABORT:
            case this.RTMP_TYPE_ACKNOWLEDGEMENT:
            case this.RTMP_TYPE_WINDOW_ACKNOWLEDGEMENT_SIZE:
            case this.RTMP_TYPE_SET_PEER_BANDWIDTH:
                return this.controlHandler();
            case this.RTMP_TYPE_EVENT:
                return this.eventHandler();
            case this.RTMP_TYPE_FLEX_MESSAGE:
            case this.RTMP_TYPE_INVOKE:
                return this.invokeHandler();
            case this.RTMP_TYPE_AUDIO:
            case this.RTMP_TYPE_VIDEO:
            case this.RTMP_TYPE_FLEX_STREAM:
            case this.RTMP_TYPE_DATA:
                return this.dataHandler();
            default:
                return undefined;
        }
    }
)