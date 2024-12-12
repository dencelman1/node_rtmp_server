

export default (
    function(
        sc
    ) {
        return (
            sc.on("data", this.onData),
            sc.on("close", this.onClose),
            sc.on("error", this.onError),
            this
        );
    }
)