

export default (
    {
        "_result": ["transId", "cmdObj", "info"],
        "_error": ["transId", "cmdObj", "info", "sid"],
        "onStatus": ["transId", "cmdObj", "info"],
        "releaseStream": ["transId", "cmdObj", "streamName"],
        "getStreamLength": ["transId", "cmdObj", "sid"],
        "getMovLen": ["transId", "cmdObj", "sid"],
        "FCPublish": ["transId", "cmdObj", "streamName"],
        "FCUnpublish": ["transId", "cmdObj", "streamName"],
        "FCSubscribe": ["transId", "cmdObj", "streamName"],
        "onFCPublish": ["transId", "cmdObj", "info"],
        "connect": ["transId", "cmdObj", "args"],
        "call": ["transId", "cmdObj", "args"],
        "createStream": ["transId", "cmdObj"],
        "close": ["transId", "cmdObj"],
        "play": ["transId", "cmdObj", "streamName", "start", "duration", "reset"],
        "play2": ["transId", "cmdObj", "params"],
        "deleteStream": ["transId", "cmdObj", "sid"],
        "closeStream": ["transId", "cmdObj"],
        "receiveAudio": ["transId", "cmdObj", "bool"],
        "receiveVideo": ["transId", "cmdObj", "bool"],
        "publish": ["transId", "cmdObj", "streamName", "type"],
        "seek": ["transId", "cmdObj", "ms"],
        "pause": ["transId", "cmdObj", "pause", "ms"]
    }
)