

export default (
    function(opt, sid) {
        var
            p = new this.RtmpPacket(0,0),
            h = null
        ;
        (h = p.header).fmt = this.RTMP_CHUNK_TYPE_0;
        h.cid = this.RTMP_CHANNEL_DATA;
        h.type = this.RTMP_TYPE_DATA;
        p.payload = this.encodeAmf0Data(opt);
        h.length = p.payload.length;
        h.stream_id = sid;
        this.onOutput(this.chunksCreate(p));
        return this;
    }
)