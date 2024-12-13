

export default (
    function(transId) {
        return this.sendInvokeMessage(0, {
          cmd: "_result",
          transId,
          cmdObj: null,
          info: this.ss++
        });
    }
)