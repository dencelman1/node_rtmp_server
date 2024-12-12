

export default (
    function(sid, opt) {
        var
            p = new this.RtmpPacket(),
            h = null
        ;
        (h = p.header).fmt = this.RTMP_CHUNK_TYPE_0;
        h.cid = this.RTMP_CHANNEL_INVOKE;
        h.type = this.RTMP_TYPE_INVOKE;
        h.stream_id = sid;
        p.payload = this.encodeAmf0Cmd(opt);
        h.length = p.payload.length;
        this.onOutput(this.chunksCreate(p));
        return this;
    }
)