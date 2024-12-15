import object from "./object.js";

export default (
    (_, b, l) => {
        var
            len = 0,
            o = null
        ;
        return (
            (
                (
                    o = (
                        object(
                            b.slice(
                                len = (
                                    3 +
                                    (
                                        l = b.readUInt16BE(1)
                                    )
                                    - 1
                                )
                            )
                        )
                    )
                )
                .value
                .__className__ = (
                    b.toString(
                        "utf8",
                        3,
                        ( 3 + l )
                    )
                )
            ),
            (o.len += len),
            o
        );
    }
)