
export default (
  function() {
    this.codec_id = 0;
    this.codec_type = 0;
    this.duration = 0;
    this.flags = 0;
    this.pts = 0;
    this.dts = 0;
    this.size = 0;
    this.offset = 0;
    this.data = Buffer.alloc(0);
  }
)