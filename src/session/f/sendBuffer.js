

export default (
    function(b) {
        return (
            this.socket.write(b),
            this
        );
    }
)