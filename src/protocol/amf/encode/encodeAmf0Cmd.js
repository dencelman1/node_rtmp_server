

export default (
    (
        reduce, // this.reduce
        d, // this.rtmpCmdCode[opt.cmd]
        b // this.amfXEncodeOne(opt.cmd)
    ) => (
        d
        ? d.reduce( reduce(opt), b )
        : b
    )
)