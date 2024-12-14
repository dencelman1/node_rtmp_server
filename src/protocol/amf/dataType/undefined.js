

export default (
    (b) => () => (
        b(Buffer.alloc(1))
    )
)(
    (b) => (
        b.writeUInt8(0x06, 0),
        b
    )
)
