

export default (
    function(bs) {
        return (
            this.pool.subarray(this.fillPool((bs |= 0)) - bs, poolOffset)
        );
    }
)