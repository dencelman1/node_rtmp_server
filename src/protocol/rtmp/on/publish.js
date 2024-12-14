

export default (
    (_, im) => {
        var sn = "";
        return (
            (typeof (sn = im.streamName) === "string")
            &&
            (
                (sn = _.n = sn.split("?")[0]),
                (
                    _.sendStatusMessage(
                        (_.sid = _.pp.stream_id),
                        "status",
                        "NetStream.Publish.Start",
                        ("[ PUBLISHED ]: " + _.p)
                    )
                ),
                _.onConnect(_.a, sn, ""),
                _.onPush()
            )
        );        
    }
)