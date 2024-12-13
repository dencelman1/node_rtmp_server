


export default (
    function (
        fmt,
        cid
    ) {
        this.fmt = fmt || 0;
        this.cid = cid || 0;
        
        this.payload = Buffer.alloc(
            this.timestamp =
            this.length =
            this.type =
            this.stream_id =
            this.clock =
            this.capacity =
            this.bytes = 0
        );
    }
);
