

export default (
    (str) => {
        var
          data = Buffer.from(str, "utf8"),
          sLen = Buffer.alloc(2)
        ;
        return (
          sLen.writeUInt16BE(data.length, 0),
          Buffer.concat([sLen, data])
        );
    }
)