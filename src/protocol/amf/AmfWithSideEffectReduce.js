

export default (
    (t, k) => (
        (
            t[k] = (
                t.AmfWithSideEffect[k]
            )(t)
        ),
        t
    )
);