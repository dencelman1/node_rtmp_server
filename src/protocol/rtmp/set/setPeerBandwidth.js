

export default (
    function(s, t) {
        var r = Buffer.from("0200000000000506000000000000000000", "hex");
        r.writeUInt32BE(s, 12);
        r[16] = t;
        this.onOutput(r);
        return this;
    }
)