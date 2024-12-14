

export default (
    (b) => (
        (_, n) => (
            b(
                Buffer.alloc(2),
                (n ? 1 : 0)
            )
        )
    )
)(
    (b, v) => (
        b.writeUInt8(0x01, 0),
        b.writeUInt8(v, 1),
        b
    )
);
