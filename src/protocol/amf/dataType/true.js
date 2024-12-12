

export default (
    (n) => {
        var b = Buffer.alloc(2);
        b.writeUInt8(0x01, 0);
        b.writeUInt8((n ? 1 : 0), 1);
        return b;
    }
)