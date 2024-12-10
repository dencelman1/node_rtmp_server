

export default (
    (s) => {
        var b = Buffer.alloc(3);
        b.writeUInt8(0x02, 0);
        b.writeUInt16BE(s.length, 1);
        return Buffer.concat([b, Buffer.from(s, "utf8")]);
    }
)