

export default (
    () => {
        var b = Buffer.alloc(1);
        b.writeUInt8(0x05, 0);
        return b;
    }
)