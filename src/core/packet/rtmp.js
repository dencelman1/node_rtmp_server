


export default (
    function (
        fmt,
        cid
    ) {
        this.header = {
            fmt: fmt || 0,
            cid: cid || 0,
            timestamp: 0,
            length: 0,
            type: 0,
            stream_id: 0
        };
        
        this.payload = Buffer.alloc(
            this.clock =
            this.capacity =
            this.bytes = 0
        );
    }
);
