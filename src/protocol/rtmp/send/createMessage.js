

export default (
    function(p) {
        var
            rtmpPacket = new this.RtmpPacket(),
            header = null,
            dts = p.dts
        ;
        rtmpPacket.header.fmt = this.MESSAGE_FORMAT_0;
        switch (p.codec_type) {
        case 8:
          rtmpPacket.header.cid = this.RTMP_CHANNEL_AUDIO;
          break;
        case 9:
          rtmpPacket.header.cid = this.RTMP_CHANNEL_VIDEO;
          break;
        case 18:
          rtmpPacket.header.cid = this.RTMP_CHANNEL_DATA;
          break;
        }
        (header = rtmpPacket.header).length = p.size;
        header.type = p.codec_type;
        header.timestamp = dts;
        rtmpPacket.clock = dts;
        rtmpPacket.payload = p.data;
        return this.chunksCreate(rtmpPacket);
    }
)