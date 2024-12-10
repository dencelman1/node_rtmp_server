

export default (
    function() {
        return (
            this.isPublisher
            ? this.broadcast.donePush(this)
            : this.broadcast.donePlay(this),
            this
        )
    }
)