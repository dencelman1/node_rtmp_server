

export default (
    function(header) {
        var out = Buffer.alloc(this.rtmpHeaderSize[header.fmt % 4]);
        if (header.fmt <= this.RTMP_CHUNK_TYPE_2) {
          out.writeUIntBE(header.timestamp >= 0xffffff ? 0xffffff : header.timestamp, 0, 3);
        }
    
        if (header.fmt <= this.RTMP_CHUNK_TYPE_1) {
          out.writeUIntBE(header.length, 3, 3);
          out.writeUInt8(header.type, 6);
        }
    
        if (header.fmt === this.RTMP_CHUNK_TYPE_0) {
          out.writeUInt32LE(header.stream_id, 7);
        }
        return out;
    }
)