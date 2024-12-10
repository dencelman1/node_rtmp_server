import * as f from './f/index.js';


export default (
  Object.setPrototypeOf(
    function () {
      this.publisher = null;
      this.subscribers = new Map();
      this.rtmpMetaData = null;
      this.rtmpAudioHeader = null;
      this.rtmpVideoHeader = null;
      this.rtmpGopCache = null;
    },
    f
  )
)