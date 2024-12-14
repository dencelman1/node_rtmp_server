

export default (
    function(o) {
        var q = null;
        return (
            ( q = this[ this.amfType(this, o) ] )
            ? q(o)
            : null
        );
    }
)