

export default (
    function(s) {
        var b = Buffer.from("02000000000004030000000000000000", "hex");
        b.writeUInt32BE(s, 12);
        this.onOutput(b);
        return this;
    }
)