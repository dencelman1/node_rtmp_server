
export default (
    (ba) => function(o) {
        return (
            (typeof o === "object")
            ? (
                Buffer.concat([
                    o.reduce(
                        (d, k) => (
                            Buffer.concat([
                                d,
                                this.amf0encUString(k),
                                this.amfXEncodeOne(this, o[k])
                            ])
                        ),
                        ba( Buffer.alloc(1), 0x03, 0 )
                    ),
                    this.amf0encUString(""),

                    ba( Buffer.alloc(1), 0x09, 0 )
                ])
            )
            : null
        );
    }
)(
    (d ,to, v) => (
        d.writeUInt8(to, v),
        d
    )
)