

export default (
    function(o) {
        var q = null;
        return (
            ( q = this[ this.amfType(o) ] )
            ? q(o)
            : null
        );
    }
)