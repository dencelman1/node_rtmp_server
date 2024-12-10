

export default (
    function(session) {
        return (
            (this.subscribers).delete(session.id),
            this
        );
    }
)