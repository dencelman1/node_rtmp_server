

export var
    FOURCC_AV1 = Buffer.from("av01"),
    FOURCC_VP9 = Buffer.from("vp09"),
    FOURCC_HEVC = Buffer.from("hvc1"),

    GenuineFMSConst = "Genuine Adobe Flash Media Server 001",

    GenuineFMSConstCrud = (
        Buffer
        .concat(
            [
                Buffer.from(GenuineFMSConst, "utf8"),
                Buffer.from([
                0xf0, 0xee, 0xc2, 0x4a, 0x80, 0x68, 0xbe, 0xe8,
                0x2e, 0x00, 0xd0, 0xd1, 0x02, 0x9e, 0x7e, 0x57,
                0x6e, 0xec, 0x5d, 0x2d, 0x29, 0x80, 0x6f, 0xab,
                0x93, 0xb8, 0xe6, 0x36, 0xcf, 0xeb, 0x31, 0xae
                ])
            ]
        )
    ),

    rtmpHeaderSize = [11, 7, 3, 0]
;
