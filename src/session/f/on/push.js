

export default (
    function() {
        return (
            (this.isPublisher = true),
            (
                (this.broadcast.postPush(this) === null) ||
                this.socket.end()
            ),
            this
        );
    }
)