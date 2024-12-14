

export default (
    (_) => (opt) => (d, n) => (
        (
            (
                (
                    Object
                    .prototype
                )
                .hasOwnProperty
            )
            .call(opt, n)
        )
        ? Buffer.concat([d, _.amfXEncodeOne(opt[n])])
        : d
    )
)