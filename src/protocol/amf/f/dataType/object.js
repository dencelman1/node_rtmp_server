

export default (
    function(o) {
        var
            termCode = null,
            data = null
        ;
        return (
            typeof o === "object"
            ? (
                (data = Buffer.alloc(1))
                .writeUInt8(0x03, 0),
                
                (termCode = Buffer.alloc(1))
                .writeUInt8(0x09, 0),

                Buffer.concat([
                    (
                        o.reduce(
                            (data, k, _, o) => (
                                Buffer.concat([data, this.amf0encUString(k), this.amfXEncodeOne(this, o[k])])
                            ),
                            data
                        )
                    ),
                    this.amf0encUString(""),
                    termCode
                ])

            )
            : null
        )
    }
)