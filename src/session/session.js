import {Rtmp, BroadcastServer} from "#index";
import * as f from './f/index.js';


function Session(ctx, socket) {
    this.id = this.randomId();
    this.ip = "";
    this.protocol = "";
    this.streamHost = "";
    this.streamApp = "";
    this.streamName = "";
    this.streamPath = "";

    this.videoCodec = 0;
    this.videoWidth = 0;
    this.videoHeight = 0;
    this.videoFramerate = 0;
    this.videoDatarate = 0;
    this.audioCodec = 0;
    this.audioChannels = 0;
    this.audioSamplerate = 0;
    this.audioDatarate = 0;
    
    this.ctx = ctx;
    this.socket = socket;
    this.ip = socket.remoteAddress + ":" + socket.remotePort;
    this.protocol = "rtmp";
    this.rtmp = new Rtmp();
    this.broadcast = new BroadcastServer();
};
Object.assign(Session.prototype, f);

Session.prototype.step = Math.ceil((1.6 * (
  Session.prototype.mask = (
    (2 << (31 - Math.clz32(((
      Session.prototype.alphabet = "1234567890abcdefghijklmnopqrstuvwxyz"    
    ).length - 1) | 1))) - 1
  )  
) * (
  Session.prototype.defaultSize = 16
)) / (
  Session.prototype.alphabet.length
));

Session.pool = null;
Session.poolOffset = 0;
Session.prototype.POOL_SIZE_MULTIPLIER = 128;

export default Session;
