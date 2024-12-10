

export default (
    function() {
        return(
            (this.isPublisher = false),
            this.broadcast.postPlay(this),
            this
        )
    }
)