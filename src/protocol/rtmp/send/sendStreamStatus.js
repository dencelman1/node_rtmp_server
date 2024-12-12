

export default (
    function(st, id) {
        var r = Buffer.from("020000000000060400000000000000000000", "hex");
        r.writeUInt16BE(st, 12);
        r.writeUInt32BE(id, 14);
        this.onOutput(r);
        return this;
    }
)