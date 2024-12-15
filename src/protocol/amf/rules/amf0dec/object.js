

export default (
    (_, b, l) => {
        var
            value = {},
            ib = b.slice(1),
            len = 1,
            sl = 0,

            pl = 0,
            pv = "",
            v = null
        ;
        while (ib.readUInt8(0) !== 0x09) {
            len += (
                pl = ( 2 + (sl = ib.readUInt16BE(0)) )
            );
            (ib.length < pl)
            ||
            (
                (ib.slice(pl).readUInt8(0) === 0x09)
                ? (len++)
                :
                ((pv = ib.toString("utf8", 2, 2 + sl)) === "")
                ||
                (
                    (
                        value[pv] = (
                            (
                                v = _.amfXDecodeOne(ib.slice(pl))
                            )
                            .value
                        )
                    ),
                    (len += (l = v.len)),
                    (ib = ib.slice(pl + l))
                )
            )
        }
        return { len, value };
    }
);
