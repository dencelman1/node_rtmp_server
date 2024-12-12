

export default (
    function(buffer) {
      var
          bytes = buffer.length,
          p = 0,
          n = 0
      ;
      while (bytes > 0) {
        switch (this.handshakeState) {
        case this.RTMP_HANDSHAKE_UNINIT:
          this.handshakeState = this.RTMP_HANDSHAKE_0;
          this.handshakeBytes = 0;
          bytes -= 1;
          p += 1;
          break;
        case this.RTMP_HANDSHAKE_0:
          n = (this.RTMP_HANDSHAKE_SIZE - this.handshakeBytes) <= bytes ? n : bytes;
          buffer.copy(this.handshakePayload, this.handshakeBytes, p, p + n);
          this.handshakeBytes += n;
          bytes -= n;
          p += n;
          if (this.handshakeBytes === this.RTMP_HANDSHAKE_SIZE) {
            this.handshakeState = this.RTMP_HANDSHAKE_1;
            this.handshakeBytes = 0;
            this.onOutput(
              this.generateS0S1S2(this.handshakePayload)
            );
          }
          break;
        case this.RTMP_HANDSHAKE_1:
          buffer.copy(this.handshakePayload, this.handshakeBytes, p, (
              n = (this.RTMP_HANDSHAKE_SIZE - this.handshakeBytes) <= bytes ? n : bytes
          ));
          this.handshakeBytes += n;
          bytes -= n;
          p += n;
          if (this.handshakeBytes === this.RTMP_HANDSHAKE_SIZE) {
            this.handshakeState = this.RTMP_HANDSHAKE_2;
            this.handshakeBytes = 0;
          }
          break;
        case this.RTMP_HANDSHAKE_2:
        default:
          return this.chunkRead(buffer, p, bytes);
        }
      }
      return null;
    }
)