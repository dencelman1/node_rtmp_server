

export default (
    (
        dataConcat
    ) => (
        (_, o) => (
            ( typeof o === "object" )
            ? (
                Buffer.concat(
                    dataConcat(
                        _,
                        Buffer.alloc(1),
                        Buffer.alloc(1),
                        "",
                        o
                    )
                )

            )
            : null
        )
    )
)(
    (_, d, tc, k, o) => {
        d.writeUInt8(0x03, 0);
        tc.writeUInt8(0x09, 0);

        for (k in o) {
            d = Buffer.concat([d, _.amf0encUString(k), _.amfXEncodeOne(o[k])]);
        };
        return [
            d,
            _.amf0encUString(""),
            tc
        ];
    }
);