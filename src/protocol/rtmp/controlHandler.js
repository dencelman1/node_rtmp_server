
export default (
    (
        t, // this
        pl, // pp.payload
        p // pp.type
    ) => (
        (p === 1)
        ? (t.ics = pl.readUInt32BE())
        :
        (p === 5)
        ? ( t.ackSize = pl.readUInt32BE() )
        : 0
    )
);

