

export default (
  (bfWrite) => (
    (_, a) => (
      a.reduce(
        _.sarrayBuffer,
        bfWrite(Buffer.alloc(5), a.length)
      )
    )
  )
)(
  (b, l) => (
    b.writeUInt8(0x0A, 0),
    b.writeUInt32BE(l, 1),
    b
  )
)