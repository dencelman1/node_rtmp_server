
export default (
  (
    o, // out // Buffer.alloc(this.rtmpHeaderSize[p.fmt % 4])
    p,
    f, // p.fmt
    t // p.timestamp
  ) => (
    (f <= 2)
    && (
      o.writeUIntBE(
        (
          t >= 0xffffff
          ? 0xffffff
          : t
        ),
        0,
        3
      )
    ),

    (f <= 1)
    &&
    (
      o.writeUIntBE(p.length, 3, 3),
      o.writeUInt8(p.type, 6)
    ),
    
    (f === 0)
    &&
    o.writeUInt32LE(p.stream_id, 7),
    
    o
  )
)