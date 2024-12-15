

export default (
    (_, b, l) => ({
        len: 5 + (l = b.readUInt32BE(1)),
        value: b.toString("utf8", 5, ( 5 + l ))
    })
)