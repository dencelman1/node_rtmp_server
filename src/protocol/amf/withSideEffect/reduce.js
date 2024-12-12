

export default (
    (o) => (opt) => (d, n) => (
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
        ? Buffer.concat([d, o.amfXEncodeOne(opt[n])])
        : d
    )
)