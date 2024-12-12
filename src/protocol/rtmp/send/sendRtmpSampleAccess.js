

export default (
    function(sid) {
        return this.sendDataMessage({
          cmd: "|RtmpSampleAccess",
          bool1: false,
          bool2: false
        }, sid);
    }
)