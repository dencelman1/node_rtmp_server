

export default (
    function(cb) {
        return (
            (
                this
                .c
            )
            .listen(
                this.p,
                this.b,
                cb
            ),
            this
        );
    }
)