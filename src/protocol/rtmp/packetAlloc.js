

export default (
    (
        p,
        l // p.length
    ) => (
        (p.capacity < l)
        ? (
            p.payload = (
                Buffer.alloc(
                    p.capacity =
                        l + 1024
                )
            )
        )
        : null
    )
)