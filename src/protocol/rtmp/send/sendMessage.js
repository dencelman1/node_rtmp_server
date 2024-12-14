

export default (
    (
        _,
        fmt, // default = 0
        sid,
        cid,
        type,
        code,
        p,
        cmd, // opt.cmd
        opt
    ) => (
        (p.fmt = fmt),
        (p.cid = cid),
        (p.type = type),
        (p.stream_id = sid),
        
        (p.length = (
            p.payload = (
                _.encodeAmf0(
                    _.reduce(opt),
                    code[cmd],
                    _.amfXEncodeOne(cmd)
                )
            )
        )
        .length),
        
        _.onOutput(_.chunksCreate(p))
    )
)