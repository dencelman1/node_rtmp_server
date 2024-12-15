

export default (
    function(p) {
      var
        cs = 0xffff, // chunkSize
        co = 0, // chunkOffset
        po = 0, // payloadOffset

        pl = p.payload,
        pls = p.length, // payloadSize
        cid = p.cid,
        fmt = p.fmt,
        ts = p.timestamp,

        cbh = this.chunkBasicHeaderCreate(fmt, cid, null), // cbh
        cbh3 = this.chunkBasicHeaderCreate(3, cid, null), // chunkBasicHeader_3
        
        cmh = this.chunkMessageHeaderCreate(
          Buffer.alloc(this.rtmpHeaderSize[fmt % 4]),
          p,
          fmt,
          ts
        ),
        // chunkMessage_Header
        
        uet = ts >= 0xffffff, // use_ExtendedTimestamp
        
        chs = (
          Buffer.alloc(
            (
              (
                (
                  cbh.length + cmh.length + (uet ? 4 : 0)
                )
                + pls + Math.floor(pls / cs)
              ) + (
                (uet)
                ? (Math.floor(pls / cs) * 4)
                : 0
              )
            )
            -
            (
              (pls % cs)
              ? 0
              : ( uet ? 5 : 1 )
            )
          )
        )
        // chunks
      ;
      
      cbh.copy(chs, co);
      cmh.copy(chs, (co += cbh.length));
      co += cmh.length;

      (uet) && (
        chs.writeUInt32BE(ts, co),
        (co += 4)
      );

      while (pls > 0) {
        (pls > cs)
        ? (
          pl.copy(chs, co, po, po + cs),
          (pls -= cs),
          (co += cs),
          (po += cs),
          cbh3.copy(chs, co),
          (co += cbh3.length_),
          
          (uet)
          && (
            chs.writeUInt32BE(ts, co),
            (co += 4)
          )
        )
        : (
          pl.copy(chs, co, po, po + pls),
          (pls = 0),
          (co += pls),
          (po += pls)
        )
      };

      return chs;
    }
)