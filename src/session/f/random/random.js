

export default (
    function(bs) {
        var f = 0, c = null;
        return (
            (f = (
                this.fillPool((bs |= 0))
            )),
            ((c = this.constructor).pool).subarray(f - bs, c.poolOffset)
        );
    }
)