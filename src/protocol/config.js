

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

    GenuineFPConst = "Genuine Adobe Flash Player 001",

    rtmpHeaderSize = [11, 7, 3, 0],

    N_CHUNK_STREAM = 8,
    RTMP_VERSION = 3,
    RTMP_HANDSHAKE_SIZE = 1536,
    RTMP_HANDSHAKE_UNINIT = 0,
    RTMP_HANDSHAKE_0 = 1,
    RTMP_HANDSHAKE_1 = 2,
    RTMP_HANDSHAKE_2 = 3,
    RTMP_PARSE_INIT = 0,
    RTMP_PARSE_BASIC_HEADER = 1,
    RTMP_PARSE_MESSAGE_HEADER = 2,
    RTMP_PARSE_EXTENDED_TIMESTAMP = 3,
    RTMP_PARSE_PAYLOAD = 4,
    MAX_CHUNK_HEADER = 18,
    RTMP_CHUNK_TYPE_0 = 0,
    RTMP_CHUNK_TYPE_1 = 1,
    RTMP_CHUNK_TYPE_2 = 2,
    RTMP_CHUNK_TYPE_3 = 3,
    RTMP_CHANNEL_PROTOCOL = 2,
    RTMP_CHANNEL_INVOKE = 3,
    RTMP_CHANNEL_AUDIO = 4,
    RTMP_CHANNEL_VIDEO = 5,
    RTMP_CHANNEL_DATA = 6,
    RTMP_TYPE_SET_CHUNK_SIZE = 1,
    RTMP_TYPE_ABORT = 2,
    RTMP_TYPE_ACKNOWLEDGEMENT = 3,
    RTMP_TYPE_WINDOW_ACKNOWLEDGEMENT_SIZE = 5,
    RTMP_TYPE_SET_PEER_BANDWIDTH = 6,
    RTMP_TYPE_EVENT = 4,
    RTMP_TYPE_AUDIO = 8,
    RTMP_TYPE_VIDEO = 9,
    RTMP_TYPE_FLEX_STREAM = 15,
    RTMP_TYPE_DATA = 18,
    RTMP_TYPE_FLEX_OBJECT = 16,
    RTMP_TYPE_SHARED_OBJECT = 19,
    RTMP_TYPE_FLEX_MESSAGE = 17,
    RTMP_TYPE_INVOKE = 20,
    RTMP_TYPE_METADATA = 22,
    RTMP_CHUNK_SIZE = 128,
    RTMP_MAX_CHUNK_SIZE = 0xffff,
    RTMP_PING_TIME = 60000,
    RTMP_PING_TIMEOUT = 30000,
    STREAM_BEGIN = 0x00,
    STREAM_EOF = 0x01,
    STREAM_DRY = 0x02,
    STREAM_EMPTY = 0x1f,
    STREAM_READY = 0x20,
    MESSAGE_FORMAT_0 = 0,
    MESSAGE_FORMAT_1 = 1,
    MESSAGE_FORMAT_2 = 2,
    RTMP_SIG_SIZE = 1536,
    SHA256DL = 32
;
