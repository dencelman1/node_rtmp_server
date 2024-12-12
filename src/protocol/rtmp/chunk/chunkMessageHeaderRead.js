

export default (
    function() {
        var
            offset = this.parserBasicBytes,
            header = null,
            pb = this.parserBuffer
        ;

        if ((header = this.parserPacket.header).fmt <= this.RTMP_CHUNK_TYPE_2) {
          header.timestamp = pb.readUIntBE(offset, 3);
          offset += 3;
        }
        
        if (this.parserPacket.header.fmt <= this.RTMP_CHUNK_TYPE_1) {
          header.length = pb.readUIntBE(offset, 3);
          header.type = pb[offset + 3];
          offset += 4;
        }
    
        if (this.parserPacket.header.fmt === this.RTMP_CHUNK_TYPE_0) {
          header.stream_id = pb.readUInt32LE(offset);
          offset += 4;
        }
        return offset;
    }
)