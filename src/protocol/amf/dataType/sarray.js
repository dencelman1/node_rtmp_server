

export default (
    function(a) {
        var b = Buffer.alloc(5);
        b.writeUInt8(0x0A, 0);
        b.writeUInt32BE(a.length, 1);
        return (
          a.reduce(
            this.sarrayBuffer,
            b
          )
        )
    }
)