import {Rtmp} from '#index';


export default (
    function(packet) {
        var rtmpMessage = Rtmp.createMessage(packet);
        switch (packet.flags) {
        case 0:
          this.rtmpAudioHeader = Buffer.from(rtmpMessage);
          break;
        case 1:
          this.rtmpGopCache?.add(rtmpMessage);
          break;
        case 2:
          this.rtmpVideoHeader = Buffer.from(rtmpMessage);
          break;
        case 3:
          this.rtmpGopCache?.clear();
          this.rtmpGopCache = new Set();
          this.rtmpGopCache.add(rtmpMessage);
          break;
        case 4:
          this.rtmpGopCache?.add(rtmpMessage);
          break;
        case 5:
          this.rtmpMetaData = Buffer.from(rtmpMessage);
          break;
        }
        
        if (this.rtmpGopCache && this.rtmpGopCache.size > 4096) {
          this.rtmpGopCache.clear();
        }
        this.subscribers.forEach((v) => (
            v.sendBuffer(rtmpMessage)
        ));
    }
)