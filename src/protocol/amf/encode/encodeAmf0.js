

export default (
    (
        reduce, // this.reduce(opt)
        d, // this["rtmpCmdCode" || "rtmpDataCode"][opt.cmd]
        b // this.amfXEncodeOne(opt.cmd)
    ) => (
        d
        ? d.reduce( reduce, b )
        : b
    )
)