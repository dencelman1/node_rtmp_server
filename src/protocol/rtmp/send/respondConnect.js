

export default (
    function(transId) {
        return this.sendInvokeMessage(0, {
          cmd: "_result",
          transId,
          cmdObj: {
            fmsVer: "FMS/3,0,1,123",
            capabilities: 31
          },
          info: {
            level: "status",
            code: "NetConnection.Connect.Success",
            description: "Connection succeeded.",
            objectEncoding: this.objectEncoding
          }
        });
    }
)