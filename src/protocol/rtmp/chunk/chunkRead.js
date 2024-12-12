

export default (
    function(data, p, bytes) {
        var
            size = 0,
            offset = 0,
            extended_timestamp = 0,
            parserBuffer = this.parserBuffer,
            rtmpHeaderSize = this.rtmpHeaderSize
        ;
    
        while (offset < bytes) {
          switch (this.parserState) {
          case this.RTMP_PARSE_INIT:
            this.parserBytes = 1;
            parserBuffer[0] = data[p + offset++];
            this.parserBasicBytes = (
                (0 === (parserBuffer[0] & 0x3f))
                ? 2
                :
                (1 === (parserBuffer[0] & 0x3f))
                ? 3
                : 1
            );
            this.parserState = this.RTMP_PARSE_BASIC_HEADER;
            break;
          case this.RTMP_PARSE_BASIC_HEADER:
            while (this.parserBytes < this.parserBasicBytes && offset < bytes) {
              parserBuffer[this.parserBytes++] = data[p + offset++];
            }
            if (this.parserBytes >= this.parserBasicBytes) {
              this.parserState = this.RTMP_PARSE_MESSAGE_HEADER;
            }
            break;
          case this.RTMP_PARSE_MESSAGE_HEADER:
            size = rtmpHeaderSize[parserBuffer[0] >> 6] + this.parserBasicBytes;
            while (this.parserBytes < size && offset < bytes) {
              parserBuffer[this.parserBytes++] = data[p + offset++];
            }
            if (this.parserBytes >= size) {
              this.packetParse();
              this.parserState = this.RTMP_PARSE_EXTENDED_TIMESTAMP;
            }
            break;
          case this.RTMP_PARSE_EXTENDED_TIMESTAMP:
            size = rtmpHeaderSize[this.parserPacket.header.fmt] + this.parserBasicBytes;
            if (this.parserPacket.header.timestamp === 0xffffff) {
              size += 4;
            }
            while (this.parserBytes < size && offset < bytes) {
              parserBuffer[this.parserBytes++] = data[p + offset++];
            }
            if (this.parserBytes >= size) {
              if (this.parserPacket.header.timestamp === 0xffffff) {
                extended_timestamp = (
                    parserBuffer.readUInt32BE(
                        rtmpHeaderSize[this.parserPacket.header.fmt] +
                        this.parserBasicBytes
                    )
                );
              } else {
                extended_timestamp = this.parserPacket.header.timestamp;
              }
    
              if (this.parserPacket.bytes === 0) {
                this.parserPacket.clock = (
                    extended_timestamp
                    +
                    (
                        (this.RTMP_CHUNK_TYPE_0 === this.parserPacket.header.fmt)
                        ? 0
                        : this.parserPacket.clock
                    )
                );
                this.packetAlloc();
              }
              this.parserState = this.RTMP_PARSE_PAYLOAD;
            }
            break;
          case this.RTMP_PARSE_PAYLOAD:
            size = Math.min(
                this.inChunkSize -
                (
                    this.parserPacket.bytes % this.inChunkSize
                ),
                (
                    this.parserPacket.header.length -
                    this.parserPacket.bytes
                )
            );
            size = Math.min(size, bytes - offset);
            if (size > 0) {
              data.copy(this.parserPacket.payload, this.parserPacket.bytes, p + offset, p + offset + size);
            }
            this.parserPacket.bytes += size;
            offset += size;
    
            if (this.parserPacket.bytes >= this.parserPacket.header.length) {
              this.parserState = this.RTMP_PARSE_INIT;
              this.parserPacket.bytes = 0;
              if (this.parserPacket.clock > 0xffffffff) {
                break;
              }
              this.packetHandler();
            } else if (0 === this.parserPacket.bytes % this.inChunkSize) {
              this.parserState = this.RTMP_PARSE_INIT;
            }
            break;
          }
        }
        return null;
    }
)