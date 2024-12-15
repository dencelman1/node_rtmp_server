
export default (
    (_, b, l) => ({
        len: 3 + (l = b.readUInt16BE(1)),
        value: b.toString("utf8", 3, 3 + l)
    })
)