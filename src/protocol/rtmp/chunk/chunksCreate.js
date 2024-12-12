

export default (
    function(p) {
        var
            header = p.header,
            payload = p.payload,
            payloadSize = header.length,
            chunkSize = this.RTMP_MAX_CHUNK_SIZE,
            chunksOffset = 0,
            payloadOffset = 0,
            chunkBasicHeader = this.chunkBasicHeaderCreate(header.fmt, header.cid),
            chunkBasicHeader3 = this.chunkBasicHeaderCreate(this.RTMP_CHUNK_TYPE_3, header.cid),
            chunkMessageHeader = this.chunkMessageHeaderCreate(header),
            useExtendedTimestamp = header.timestamp >= 0xffffff,
            headerSize = chunkBasicHeader.length + chunkMessageHeader.length + (useExtendedTimestamp ? 4 : 0),
            n = 0,

            chunks = Buffer.alloc(
                n = (
                    (
                        (
                            headerSize + payloadSize + Math.floor(payloadSize / chunkSize)
                        ) + (
                            (useExtendedTimestamp)
                            ? (Math.floor(payloadSize / chunkSize) * 4)
                            : 0
                        )
                    )
                    -
                    (
                        (payloadSize % chunkSize)
                        ? 0
                        : (
                            useExtendedTimestamp
                            ? 5
                            : 1
                        )
                    )
                )
            )
        ;
        
        chunkBasicHeader.copy(chunks, chunksOffset);
        chunkMessageHeader.copy(chunks, (chunksOffset += chunkBasicHeader.length));
        chunksOffset += chunkMessageHeader.length;
        if (useExtendedTimestamp) {
          chunks.writeUInt32BE(header.timestamp, chunksOffset);
          chunksOffset += 4;
        }
        while (payloadSize > 0) {
          if (payloadSize > chunkSize) {
            payload.copy(chunks, chunksOffset, payloadOffset, payloadOffset + chunkSize);
            payloadSize -= chunkSize;
            chunksOffset += chunkSize;
            payloadOffset += chunkSize;
            chunkBasicHeader3.copy(chunks, chunksOffset);
            chunksOffset += chunkBasicHeader3.length;
            if (useExtendedTimestamp) {
              chunks.writeUInt32BE(header.timestamp, chunksOffset);
              chunksOffset += 4;
            }
          } else {
            payload.copy(chunks, chunksOffset, payloadOffset, payloadOffset + payloadSize);
            payloadSize -= payloadSize;
            chunksOffset += payloadSize;
            payloadOffset += payloadSize;
          }
        }
        return chunks;
    }
)