

export default (
  (
    o, // offset // this.pbb
    p,
    f, // p.fmt
    b // this.bf
  ) => (
    (f <= 2) && (
      (p.timestamp = b.readUIntBE(o, 3)),
      (o += 3)
    ),

    (f <= 1) && (
      (p.length = b.readUIntBE(o, 3)),
      (p.type = b[o + 3]),
      (o += 4)
    ),

    (f === 0) && (
      (p.stream_id = b.readUInt32LE(o)),
      (o += 4)
    ),

    o
  )
)