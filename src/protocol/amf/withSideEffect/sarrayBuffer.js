

export default (
    (o) => (
        (b, v) => (
            Buffer.concat([b, o.amfXEncodeOne(v)])
        )
    )
)