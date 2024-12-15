import {randomBytes} from "crypto";

export default (
    (_, mf, sg) => {
        var
            rb = null,
            cko = 0 // challengeKey_Offset
        ;
        return Buffer.concat(
            [
                (
                    rb = (
                        randomBytes(
                            1504
                        )
                    )
                ),
                _.calcHmac(
                    rb,
                    _.calcHmac(
                        sg.slice(
                            (
                                cko = (
                                    (mf === 1)
                                    ? _.GetClientGenuineConstDigestOffset(sg.slice(8, 12))
                                    : _.GetServerGenuineConstDigestOffset(sg.slice(772, 776))
                                )
                            ),
                            ( cko + 32 )
                        ),
                        _.GenuineFMSConstCrud
                    )
                )
            ],
            1536
        );
    }
)