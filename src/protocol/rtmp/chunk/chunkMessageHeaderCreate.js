

export default (
  (
    out, // Buffer.alloc(this.rtmpHeaderSize[pp.fmt % 4])
    pp
  ) => (
    (pp.fmt <= 2)
    && (
      out
      .writeUIntBE(
        (
          pp.timestamp >= 0xffffff
          ? 0xffffff
          : pp.timestamp
        ),
        0,
        3
      )
    ),

    (pp.fmt <= 1)
    &&
    (
      out.writeUIntBE(pp.length, 3, 3),
      out.writeUInt8(pp.type, 6)
    ),
    
    (pp.fmt === 0)
    &&
    out.writeUInt32LE(pp.stream_id, 7),
    
    out
  )
)