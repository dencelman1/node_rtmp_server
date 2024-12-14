

export default (
    function(sid, level, code, description) {
      var cmd = "onStatus";
      return this.sendMessage(
        this,
        0,
        sid,
        3,
        20,
        this.rtmpCmdCode,
        new this.RtmpPacket(0,0),
        cmd,
        {
          cmd,
          transId: 0,
          cmdObj: null,
          info: {
            level,
            code,
            description
          }
        }
      );
    }
)