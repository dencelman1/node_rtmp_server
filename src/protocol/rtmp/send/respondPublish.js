

export default (
    function() {
      return this.sendStatusMessage(
        this.sid,
        "status",
        "NetStream.Publish.Start",
        ("[ PUBLISHED ]: " + this.p)
      );
    }
)