import amf0dRules from "./amf0dRules.js";
import * as f from './f/index.js';


((
  amf0dRules,
  f
) => {
  
  var
    o = {
      decodeAmf0Cmd(dbuf) {
        var
          buffer = dbuf,
          resp = {},
          cmd = this.amfXDecodeOne(amf0dRules, buffer),
          d = null,
          v = cmd.value
        ;
        return (
          (buffer = buffer.slice(cmd.len)),
          (d = this.rtmpCmdCode[resp.cmd = v])
          &&
          (
            d
            .forEach((n) => {
              var r = null;
              return (
                (buffer.length > 0)
                &&
                (
                  (buffer = buffer.slice(
                    (r = this.amfXDecodeOne(amf0dRules, buffer)).len
                  )),
                  (resp[n] = r.value)
                )
              )
            })
          ),
          resp
        );
      },
      encodeAmf0Cmd(opt) {
        var d = null;
        return (
          (d = this.rtmpCmdCode[opt.cmd])
          ? 
            d.reduce(
              this.reduce(opt),
              this.amfXEncodeOne(this, opt.cmd)
            )
          :
            this.amfXEncodeOne(this, opt.cmd)
        );
      },
      decodeAmf0Data(dbuf) {
        var
          buffer = dbuf,
          resp = {},
          cmd = null,
          d = null,
          v = cmd.value
        ;
        return (
          (cmd = this.amfXDecodeOne(amf0dRules, buffer))
          &&
          (
            (buffer = buffer.slice(cmd.len)),
            (d = this.rtmpDataCode[resp.cmd = v])
            &&
            (
              d
              .forEach((n) => {
                var r = null;
                return (
                  (buffer.length > 0 && (r = this.amfXDecodeOne(amf0dRules, buffer)))
                  && 
                  (
                    (buffer = buffer.slice(r.len)),
                    (resp[n] = r.value)
                  )
                )
              })
            )
          ),
          resp
        );
      },
      encodeAmf0Data(opt) {
        var d = null;
        return (
          (d = this.rtmpDataCode[opt.cmd])
          ? (
            d
            .reduce(
              this.reduce(opt),
              this.amfXEncodeOne(this, opt.cmd)
            )
          )
          : this.amfXEncodeOne(this, opt.cmd)
        );
      },
      amf0EncodeReduce: (
        (buf, O) => (
          Buffer.concat([buf, o.amfXEncodeOne(this, O)])
        )
      ),
      amf0Encode(a) {
        return (
          a.reduce(
            this.amf0EncodeReduce,
            Buffer.alloc(0)
          )
        );  
      },
      amfXEncodeOne(rules, o) {
        var q = null;
        return (
          (q = rules[this.amfType(o)])
          ? q(o)
          : null
        );
      },
      
      amf0encObject: function(o) {
        if (typeof o !== "object") return null;
      
        let data = Buffer.alloc(1);
        data.writeUInt8(0x03, 0); // Type object
        let k;
        for (k in o) {
          data = Buffer.concat([data, this.amf0encUString(k), this.amfXEncodeOne(this, o[k])]);
        }
        let termCode = Buffer.alloc(1);
        termCode.writeUInt8(0x09, 0);
        return Buffer.concat([data, this.amf0encUString(""), termCode]);
      },

      sarrayBuffer: (b, v) => (
        Buffer.concat([b, o.amfXEncodeOne(o, v)])
      ),

      reduce: (opt) => (data, n) => (
        (Object.prototype.hasOwnProperty.call(opt, n))
        ? Buffer.concat([data, o.amfXEncodeOne(o, opt[n])])
        : data
      )
    }
    
  ;
  
  Object.setPrototypeOf(amf0dRules, f);
  Object.setPrototypeOf(o, f);

  return o;
})(
  amf0dRules,
  f
)