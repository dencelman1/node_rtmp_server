import {randomBytes} from 'crypto';

export default (
    (
        _,
        mf // messageFormat
    ) => {
        var
            RTMP_SIG_SIZE = _.RTMP_SIG_SIZE,
            rb = randomBytes(RTMP_SIG_SIZE - 8),
            hb = Buffer.concat([Buffer.from([0, 0, 0, 0, 1, 2, 3, 4]), rb], RTMP_SIG_SIZE),
            serverDigestOffset = (
                (mf === 1)
                ? _.GetClientGenuineConstDigestOffset(hb.slice(8, 12))
                : _.GetServerGenuineConstDigestOffset(hb.slice(772, 776))
            )
        ;
            
        _.calcHmac(
            Buffer.concat([
                hb.slice(0, serverDigestOffset),
                hb.slice(serverDigestOffset + _.SHA256DL)],
                RTMP_SIG_SIZE - _.SHA256DL
            ),
            _.GenuineFMSConst
        )
        .copy(hb, serverDigestOffset, 0, 32);
        return hb;
    }
)