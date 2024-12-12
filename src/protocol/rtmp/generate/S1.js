import {randomBytes} from 'crypto';

export default (
    function(messageFormat) {
        var
            RTMP_SIG_SIZE = this.RTMP_SIG_SIZE,
            rb = randomBytes(RTMP_SIG_SIZE - 8),
            handshakeBytes = Buffer.concat([Buffer.from([0, 0, 0, 0, 1, 2, 3, 4]), rb], RTMP_SIG_SIZE),
            serverDigestOffset = (
                (messageFormat === 1)
                ? this.GetClientGenuineConstDigestOffset(handshakeBytes.slice(8, 12))
                : this.GetServerGenuineConstDigestOffset(handshakeBytes.slice(772, 776))
            )
        ;
            
        this.calcHmac(
            Buffer.concat([
                handshakeBytes.slice(0, serverDigestOffset),
                handshakeBytes.slice(serverDigestOffset + this.SHA256DL)],
                RTMP_SIG_SIZE - this.SHA256DL
            ),
            this.GenuineFMSConst
        )
        .copy(handshakeBytes, serverDigestOffset, 0, 32);
        return handshakeBytes;
    }
)