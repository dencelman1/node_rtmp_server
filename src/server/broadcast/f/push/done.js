

export default (
    function(session) {
        return (
          (session === this.publisher)
          &&
          (
            (
              this.publisher =
              this.rtmpMetaData =
              this.rtmpAudioHeader =
              this.rtmpVideoHeader = null
            ),
            (this.rtmpGopCache)?.clear()
          )
        )
    }
)