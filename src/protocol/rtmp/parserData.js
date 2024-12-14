

export default (
    function(buffer) {
      var
        _ = this,
        bytes = buffer.length,
        p = 0,
        n = 0,
        hs = 0,

        hb = null,
        hp = null,
        
        RTMP_HANDSHAKE_SIZE = _.RTMP_HANDSHAKE_SIZE
      ;
      
      while (bytes > 0) {
        (hb = _.hb),
        (hp = _.hp),

        ((hs = _.hs) === 0)
        ? (
          (_.hs = 1),
          (_.hb = 0),
          (bytes -= 1),
          (p += 1)
        )
        :
        (hs === 1)
        ? (
          buffer.copy(
            hp,
            hb,
            p,
            p + (
              n =
                (
                  (n = (
                    RTMP_HANDSHAKE_SIZE -
                    hb
                  ))
                  <= bytes
                )
                ? n
                : bytes
            )
          ),
          (bytes -= n),
          (p += n),
          (
            (_.hb += n) === RTMP_HANDSHAKE_SIZE
          )
          && (
            (_.hs = 2),
            (_.hb = 0),
            _.onOutput(
              _.generateS0S1S2(
                _,
                hp,
                _.detectClientMessageFormat(hp)
              )
            )
          )
        )
        :
        (hs === 2)
        ? (
          buffer.copy( hp, hb, p, (
            n = (
              (
                (n = RTMP_HANDSHAKE_SIZE - hb)
                <= bytes
              )
              ? n
              : bytes
            )
          )),
          (bytes -= n),
          (p += n),

          ((_.hb += n) === RTMP_HANDSHAKE_SIZE)
          &&
          (
            (_.hs = 3),
            (_.hb = 0)
          )

        )
        : (
          bytes = _.chunkRead(buffer, p, bytes)
        )
      };

      return 0;
    }
)