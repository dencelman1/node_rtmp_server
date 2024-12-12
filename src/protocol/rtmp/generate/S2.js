

export default (
    function(messageFormat, clientsig) {
        var
            RTMP_SIG_SIZE = this.RTMP_SIG_SIZE,
            randomBytes = crypto.randomBytes(RTMP_SIG_SIZE - 32),
            challengeKeyOffset = (
                (messageFormat === 1)
                ? this.GetClientGenuineConstDigestOffset(clientsig.slice(8, 12))
                : this.GetServerGenuineConstDigestOffset(clientsig.slice(772, 776))
            )
        ;
        
        return Buffer.concat(
            [
                randomBytes,
                (
                    this.calcHmac(
                        randomBytes,
                        (
                            this.calcHmac(
                                clientsig.slice(challengeKeyOffset, challengeKeyOffset + 32),
                                this.GenuineFMSConstCrud
                            )
                        )
                    )
                )
            ],
            RTMP_SIG_SIZE
        );
    }
)