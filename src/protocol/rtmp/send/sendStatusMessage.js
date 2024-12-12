

export default (
    function(sid, level, code, description) {
        return this.sendInvokeMessage(sid, {
          cmd: "onStatus",
          transId: 0,
          cmdObj: null,
          info: {
            level,
            code,
            description
          }
        });
    }
)