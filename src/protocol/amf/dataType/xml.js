

export default (
    (b) => (_, s) => (
        Buffer.concat([
            b(Buffer.alloc(3), s.length),
            Buffer.from(s, "utf8")
        ])
    )
)(
    (b, l) => (
        b.writeUInt8(0x0F, 0),
        b.writeUInt16BE(l, 1),
        b
    )
);
