

export default (
    (_, b, c) => {
        var
            a = [],
            r = null,
            len = 5
        ;
        
        for (
            c = b.readUInt32BE(1);
            c;
            c--
        ) {
            a.push(
                (
                    Object.assign(
                        r,
                        _.amfXDecodeOne(
                            b.slice(len)
                        )
                    )
                )
                .value
            );
            len += r.len;
        };

        r.len = len;
        r.value = Object.defineProperty(a, "sarray", _.sarrV);

        return r;
    }
)