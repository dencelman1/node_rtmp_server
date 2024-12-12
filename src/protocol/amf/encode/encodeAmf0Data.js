

export default (
    function(opt) {
        var
            d = null,
            b = this.amfXEncodeOne(opt.cmd)
        ;
        return (
          (d = this.rtmpDataCode[opt.cmd])
          ? d.reduce( this.reduce(opt), b )
          : b
        );
    }
)