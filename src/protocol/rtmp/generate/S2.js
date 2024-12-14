

export default (
    (_, mf, sg) => {
        var
            RTMP_SIG_SIZE = _.RTMP_SIG_SIZE,
            randomBytes = crypto.randomBytes(RTMP_SIG_SIZE - 32),
            challengeKeyOffset = (
                (mf === 1)
                ? _.GetClientGenuineConstDigestOffset(sg.slice(8, 12))
                : _.GetServerGenuineConstDigestOffset(sg.slice(772, 776))
            )
        ;
        
        return Buffer.concat(
            [
                randomBytes,
                (
                    _.calcHmac(
                        randomBytes,
                        (
                            _.calcHmac(
                                sg.slice(challengeKeyOffset, challengeKeyOffset + 32),
                                _.GenuineFMSConstCrud
                            )
                        )
                    )
                )
            ],
            RTMP_SIG_SIZE
        );
    }
)