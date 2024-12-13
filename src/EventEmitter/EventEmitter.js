

function EventEmitter( all ) {
    this.v = new Map();
    this.a = all;
};

EventEmitter.prototype.off = (
    function(n, cb) {
        return (
            (this.v)
            .get(n)
            .delete(cb),
            this
        )
    }
)

EventEmitter.prototype.on = (
    function(n, cb) {
        var
            s = null,
            v = null
        ;
        return (
            (
                s = (
                    (v = this.v)
                    .get(n)
                    ||
                    (
                        v.set(n, (s = new Set())),
                        s
                    )
                )
            )
            .add(cb),
            this
        );
    }
);

EventEmitter.prototype.emit = (
    function(n, cb) {
        return (
            (this.v)
            .get(n)
            ?.forEach(cb),

            (this.a)
            &&
            (
                (this.v)
                .get(8)
                .forEach((f) => f(this, n))
            ),

            0
        );
    }
)

export default EventEmitter;
