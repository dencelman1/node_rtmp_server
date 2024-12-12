
export default (
    function(type, time, size, data) {
        var
            p = new this.AvPacket(),
            codecID = 0,
            isExHeader = false,
            frameType = 0,
            packetType = 0,
            fourCC = null
        ;

        p.codec_type = type;

        p.pts =
        p.dts = (
            time
        );
        p.size = size;
        p.data = data;

        if (type === 8) {
            codecID = data[0] >> 4;
            p.codec_id = codecID;
            p.flags = 1;

            (codecID === 10)
            &&
            (data[1] === 0)
            &&
            ( p.flags = 0 )

        }
        else if (type === 9) {
          frameType = data[0] >> 4 & 0b0111;
          codecID = data[0] & 0x0f;
          isExHeader = (data[0] >> 4 & 0b1000) !== 0;
    
            if (isExHeader) {
                packetType = data[0] & 0x0f;
            
                if (
                    (
                        fourCC = data.subarray(1, 5)
                    )
                    .compare(this.FOURCC_AV1) === 0 ||
                    fourCC.compare(this.FOURCC_VP9) === 0 ||
                    fourCC.compare(this.FOURCC_HEVC) === 0
                ) {
                    p.codec_id = fourCC.readUint32BE();
                    p.flags = (
                        (packetType === 0)
                        ? 2
                        :
                        (packetType === 1 || packetType === 3)
                        ? (frameType === 1) ? 3: 4
                        :
                        (packetType === 4)
                        ? 6
                        : p.flags
                    )
        
                    if (
                        (fourCC.compare(this.FOURCC_HEVC) === 0)
                        &&
                        (packetType === 1)
                    ) {
                        p.pts = p.dts + data.readUintBE(5, 3);
                    }
                }
            }
            else {
                packetType = data[1];
                p.codec_id = codecID;
                p.pts = p.dts + data.readUintBE(2, 3);
                p.flags = 4;
                if (codecID === 7) {
                    p.flags = (
                        (packetType === 0)
                        ? 2
                        :
                        (frameType === 1)
                        ? 3
                        : 4
                    )
                }
            }
        }
        else if (type === 18) {
          p.flags = 5;
        }
        return p;
    }
)