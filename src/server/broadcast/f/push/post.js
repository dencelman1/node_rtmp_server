

export default (
    function(session) {
        return (this.publisher ||= session);
    }
)