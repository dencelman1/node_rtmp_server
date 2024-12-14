

export default (
    (_) => (
        (b, v) => (
            Buffer.concat([b, _.amfXEncodeOne(v)])
        )
    )
)
