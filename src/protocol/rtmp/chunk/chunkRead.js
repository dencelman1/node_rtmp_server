

export default (
  function(data, p, bytes) {
    var
      _ = this,
      size = 0,
      offset = 0,
      extended_timestamp = 0,
      
      rtmpHeaderSize = _.rtmpHeaderSize,

      ps = null,
      bf = null,
      pb = null,
      pbb = null,
      ics = null,
      pp = null,

      isWhite = false,

      l = 0,
      pbytes = 0,
      timestamp = 0,

      set = (_, to) => {
        var
          bf = _.bf,
          pb = _.pb
        ;
        while ((pb < to) && (offset < bytes)) {
          bf[pb++] = data[p + offset++];
        };
        _.pb = pb;
        return to;
      },

      f = 0
    ;

    while (offset < bytes) {
      (ps = _.ps),
      console.log("ps = "+ps),

      (ics = _.ics),
      (pb = _.pb),
      (pbb = _.pbb),
      (bf = _.bf),
      (pp = _.pp),

      (ps === 0)
      ? (
        (_.pb = 1),
        (
          _.pbb = (
            (0 === ((f = data[p + offset++]) & 0x3f))
            ? 2
            :
            (1 === (f & 0x3f))
            ? 3
            : 1
          )
        ),

        (_.ps = 1),
        (bf[0] = f)
      )
      :
      (ps === 1)
      ? (
        (pb >= set(_, pbb))
        &&
        ( _.ps = 2 )
      )
      :
      (ps === 2)
      ? (
        (
          pb >= (
            size = (
              set(
                _,
                rtmpHeaderSize[bf[0] >> 6] + pbb
              )
            )
          )
        )
        &&
        (
          _.pbb = (
            this.chunkMessageHeaderRead(
              pbb,
              (
                pp = _.pp = (
                  this.packetParse(
                    pbb,
                    bf,
                    this.inp,
                    bf[0] >> 6,
                    this.RtmpPacket,
                    0,
                    null
                  )
                )
              ),
              pp.fmt, // pp.fmt
              bf // this.bf
            )
          ),

          (_.ps = 3)
        )
      )
      :
      (ps === 3)
      ? (
        (pb >= (
          size = set(
            _,
            (
              (rtmpHeaderSize[pp.fmt] + pbb)
              +
              (
                ( isWhite = ( (timestamp = pp.timestamp) === 0xffffff ) )
                ? 4
                : 0
              )
            )
          )
        ))
        &&
        (
          (extended_timestamp = (
            isWhite
            ? (
              bf
              .readUInt32BE(
                rtmpHeaderSize[pp.fmt] +
                pbb
              )
            )
            : timestamp
          )),

          (pbytes === 0)
          && (
            (pp.clock = (
                extended_timestamp
                +
                (
                  (0 === pp.fmt)
                  ? 0
                  : pp.clock
                )
            )),
            
            this.packetAlloc( pp, pp.length )
          ),
          (_.ps = 4)
        )
      )
      :
      (ps === 4)
      && (
        
        ((
          size = Math.min(
            (
              (size = Math.min(
                ics -
                (
                  (pbytes = pp.bytes) % ics
                ),
                (
                  (l = pp.length) -
                  pbytes
                )
              ))
            ),
            bytes - offset
          )
        ) > 0)
        &&
        (
          data.copy(
            pp.payload,
            pbytes,
            p + offset,
            p + offset + size
          )
        ),
        (offset += size),

        ((pbytes = (pp.bytes += size)) >= l)
        ? (
          (
            _.ps =
            pp.bytes =
              0
          ),

          (pp.clock > 0xffffffff)
          ||
          this.packetHandler(this, pp, pp.type)
        )
        :
        (0 === pbytes % ics)
        &&
        (
          _.ps = 0
        )
      )
    };

    return 0;
  }
)