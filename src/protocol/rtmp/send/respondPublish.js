

export default (
    function() {
      return this.sendStatusMessage(
        this.streamId,
        "status",
        "NetStream.Publish.Start",
        ("[ PUBLISHED ]: " + this.p)
      );
    }
)