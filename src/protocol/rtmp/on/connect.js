

export default (
    function(im) {
        var
            o = im.cmdObj,
            oe = o.objectEncoding
        ;
        this.a = (
            o.app = o.app.replace("/", "")
        );
        this.objectEncoding = oe === null ? 0: oe;
        this.sendWindowACK(5000000);
        this.setPeerBandwidth(5000000, 2);
        this.setChunkSize(this.RTMP_MAX_CHUNK_SIZE);
        this.respondConnect(im.transId);
        return this;
    }
)