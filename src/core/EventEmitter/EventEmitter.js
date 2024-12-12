

function EventEmitter() {
    this.v = new Map();
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
            ?.forEach(cb)
        );
    }
)

export default EventEmitter;
