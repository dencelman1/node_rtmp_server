

export default (
    (_, b) => ({
        len: 11,
        value: b.readDoubleBE(3)
    })
)