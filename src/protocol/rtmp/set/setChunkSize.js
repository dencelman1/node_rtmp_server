

export default (
    function(s) {
        var r = Buffer.from("02000000000004010000000000000000", "hex");
        r.writeUInt32BE(s, 12);
        this.onOutput(r);
        return this;
    }
)