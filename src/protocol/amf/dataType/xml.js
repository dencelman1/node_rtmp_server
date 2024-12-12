

export default (
    (s) => {
        var b = Buffer.alloc(3);
        b.writeUInt8(0x0F, 0);
        b.writeUInt16BE(s.length, 1);
        return Buffer.concat([b, Buffer.from(s, "utf8")]);
    }
)