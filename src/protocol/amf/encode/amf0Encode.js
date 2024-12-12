

export default (
    function(a) {
        return (
            a.reduce(
                this.amf0EncodeReduce,
                Buffer.alloc(0)
            )
        );  
    }
)