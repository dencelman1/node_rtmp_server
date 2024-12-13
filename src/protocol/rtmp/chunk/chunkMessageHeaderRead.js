

export default (
  (
    o, // offset // this.pbb
    pp,
    fmt, // pp.fmt
    bf // this.bf
  ) => (
    (fmt <= 2)
    &&
    (
      (pp.timestamp = bf.readUIntBE(o, 3)),
      (o += 3)
    ),

    (fmt <= 1) &&
    (
      (pp.length = bf.readUIntBE(o, 3)),
      (pp.type = bf[o + 3]),
      (o += 4)
    ),

    (fmt === 0)
    &&
    (
      (pp.stream_id = bf.readUInt32LE(o)),
      (o += 4)
    ),

    o
  )
)