

export default (
    (_, n) => {
        var b = Buffer.alloc(9);
        b.writeUInt8(0x00, 0);
        b.writeDoubleBE(n, 1);
        return b;
    }
)