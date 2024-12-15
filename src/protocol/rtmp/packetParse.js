
export default (
    (
        pbb,
        bf,
        inp,
        fmt, // this.bf[0] >> 6
        RtmpPacket,
        cid, // 0
        pp, // null

    ) => (
        (
            (
                pp = (
                    inp.get(
                        cid = (
                            (pbb === 2)
                            ? (64 + bf[1])
                            :
                            (pbb === 3)
                            ? ((64 + bf[1] + bf[2]) << 8)
                            : (bf[0] & 0x3f)
                        )
                    )
                    ?? new RtmpPacket(fmt, cid)
                )
            )
            .fmt = fmt
        ),

        inp.set(
            (pp.cid = cid),
            pp
        ),
        pp
    )
)