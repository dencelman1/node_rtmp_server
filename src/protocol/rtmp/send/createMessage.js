

export default (
    function(p) {
        var
          rp = new this.RtmpPacket(),
          dts = p.dts,
          ct = p.codec_type
        ;
        
        rp.cid = (
          ct === 8
          ? 4
          :
          ct === 9
          ? 5
          :
          ct === 18
          ? 6
          : rp.cid
        );
        
        rp.fmt = 0;
        rp.length = p.size;
        rp.type = p.codec_type;
        rp.timestamp = dts;
        rp.clock = dts;
        rp.payload = p.data;
        return this.chunksCreate(rp);
    }
)