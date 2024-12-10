

export default (
    function(cb) {
        var r = this.ctx.config.rtmp;
        
        return (
            (
                this
                .tcpServer
            )
            .listen(
                r.port,
                r.bind,
                cb
            ),
            this
        );
    }
)