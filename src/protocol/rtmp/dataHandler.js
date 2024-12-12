

export default (
    function() {
        var pp = null,
            h = null;
        
        return this.onPacket(
            this.flvParserTag(
                (h = (pp = this.parserPacket).header).type,
                pp.clock,
                h.length,
                pp.payload
            )
        );
    }
)