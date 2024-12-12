import * as f from './f/index.js';


function Session(sc) {
  this.sc = sc;
  
  this.id = this.randomId();
  
  this.a =
  this.n =
  this.p = "";
  this.ip = sc.remoteAddress + ":" + sc.remotePort;

  this.handshakePayload = Buffer.alloc(this.RTMP_HANDSHAKE_SIZE);
  this.handshakeState = this.RTMP_HANDSHAKE_UNINIT;
  this.handshakeBytes = 0;

  this.parserBuffer = Buffer.alloc(this.MAX_CHUNK_HEADER);
  this.parserState = this.RTMP_PARSE_INIT;
  this.parserBytes = 0;
  this.parserBasicBytes = 0;
  this.parserPacket = new this.RtmpPacket();
  this.inPackets = new Map();

  this.inChunkSize = this.RTMP_CHUNK_SIZE;
  this.streams = 0;

  Object.keys(this.AmfWithSideEffect)
  .reduce(
    this.AmfWithSideEffectReduce,
    this
  );

  Object.keys(this.on)
  .reduce(
      this.onReduce,
      this
  );
};

export default ((p, S, alphabet) => (
  (p.onReduce = (
    (t, k) => (
      (t[k] = t.on[k](t)),
      t
    )
  )),
  (
    p.step = (
      Math.ceil(
        (
          1.6 *
          (
            p.mask = (
              (2 << (31 - Math.clz32(((
                p.alphabet = alphabet
              ).length - 1) | 1))) - 1
            )  
          ) * (
            p.defaultSize = 16
          )
        )
        /
        ( alphabet.length )
      )
    )
  ),

  (
    p.s =
    S.pool = (
      null
    )
  ),

  (S.poolOffset = 0),
  (p.POOL_SIZE_MULTIPLIER = 128),

  S
))(
  Object.assign(Session.prototype, f),
  Session,
  "1234567890abcdefghijklmnopqrstuvwxyz",
);
