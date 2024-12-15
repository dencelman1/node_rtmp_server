import {randomBytes} from 'crypto';

export default (
    (
        _,
        mf // messageFormat
    ) => {
        var
            hb = Buffer.concat(
                [
                    Buffer.from([0, 0, 0, 0, 1, 2, 3, 4]),
                    randomBytes(1528)
                    
                ],
                1536
            ),

            // server_Digest_Offset
            sdo = (
                (mf === 1)
                ? _.GetClientGenuineConstDigestOffset(hb.slice(8, 12))
                : _.GetServerGenuineConstDigestOffset(hb.slice(772, 776))
            )
        ;
        return (
            _.calcHmac(
                Buffer.concat(
                    [
                        hb.slice(0, sdo),
                        hb.slice(sdo + 32)
                    ],
                    1504
                ),
                _.GenuineFMSConst
            )
            .copy(hb, sdo, 0, 32),

            hb
        );
    }
)