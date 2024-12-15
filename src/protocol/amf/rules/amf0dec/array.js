import object from "./object.js";


export default (
    (
        (o, object) => (
            (_, b) => (
                o(
                    object(
                        b.slice(4)
                    )
                )
            )
        )
    )(
        (o) => (
            (o.len += 5),
            o
        ),
        object
    )
)