

export default (
    (_) => (o) => (d, n) => (
        (
            (
                (
                    Object
                    .prototype
                )
                .hasOwnProperty
            )
            .call(o, n)
        )
        ? Buffer.concat([d, _.amfXEncodeOne(o[n])])
        : d
    )
)