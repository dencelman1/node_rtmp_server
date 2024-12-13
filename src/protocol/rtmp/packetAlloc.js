

export default (
    (
        pp,
        l // pp.length
    ) => (
        (pp.capacity < l)
        &&
        (
            pp.payload = (
                Buffer.alloc(
                    pp.capacity =
                        l + 1024
                )
            )
        )
    )
)