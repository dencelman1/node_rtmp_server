

export default (
    (
        t, // this
        p // pp
    ) => (
        t.onPacket(
            t.flvParserTag(
                p.type,
                p.clock,
                p.length,
                p.payload
            )
        )
    )
)