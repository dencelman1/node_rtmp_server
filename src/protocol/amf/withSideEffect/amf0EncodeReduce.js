

export default (
    (o) => (
        (b, O) => (
            Buffer.concat([b, o.amfXEncodeOne(O)])
        )
    )
)