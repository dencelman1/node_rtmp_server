

export default (
    (d) => {
        var e = null;
        return (
            (e = this.rtmp.parserData(d))
            &&
            (
                console.error(e),
                this.socket.end()
            ),
            this
        );
    }
)