

export default (
    function(opt, sid) {
        var
            p = new this.RtmpPacket(0,0)
        ;
        p.fmt = 0;
        p.cid = 6;
        p.type = 18;
        
        p.length = (
            p.payload = this.encodeAmf0Data(opt)
        )
        .length;
        p.stream_id = sid;
        this.onOutput(this.chunksCreate(p));
        return this;
    }
)