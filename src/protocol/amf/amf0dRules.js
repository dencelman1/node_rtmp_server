

export default (
    {
        0x00: (b) => ({ len: 9, value: b.readDoubleBE(1) }),
        0x01: (b) => ({ len: 2, value: (b.readUInt8(1) != 0) }),
        0x02: (
          (b) => {
            var sLen = 0;
            return {
              len: 3 + (sLen = b.readUInt16BE(1)),
              value: b.toString("utf8", 3, 3 + sLen)
            };
          }
        ),
        0x03: (
          function(b) {
            var
              value = {},
              iBuf = b.slice(1),
              len = 1
            ;
            
            while (iBuf.readUInt8(0) != 0x09) {
              var
                sLen = 0,
                prop = {
                  len: 2 + (sLen = iBuf.readUInt16BE(0)),
                  value: iBuf.toString("utf8", 2, 2 + sLen)
                },
                val = null
              ;
              len += prop.len;
              if (iBuf.length < prop.len) {
                break;
              }
              if (iBuf.slice(prop.len).readUInt8(0) == 0x09) {
                len++;
                break;
              }
              if (prop.value == "") break;
              
              value[prop.value] = (val = this.amfXDecodeOne(amf0dRules, iBuf.slice(prop.len))).value;
              len += val.len;
              iBuf = iBuf.slice(prop.len + val.len);
            }
            return { len, value };
          }
        ),
        0x05: () => ({ len: 1, value: null }),
        0x06: () => ({ len: 1, value: undefined }),
        0x07: (b) => ({ len: 3, value: "ref" + b.readUInt16BE(1) }),
        0x08: (
          function(buf) {
            var obj = (this[0x03])(buf.slice(4));
            return { len: 5 + obj.len, value: obj.value };
          }
        ),
        0x0A: (
          function(buf) {
            var
              length = buf.readUInt32BE(1),
              a = Array.from({length}, ()=>""),
              len = 5;
              ret = null,
              i = 0
            ;
            for (; length; length--) {
              a[i++] = (ret = this.amfXDecodeOne(o, buf.slice(len))).value;
              len += ret.len;
            }
            return {
              len,
              value: 
                Object.defineProperty(a, "sarray", this.sarrV)
            };
          }
        ),
        0x0B: (b) => ({ len: 11, value: b.readDoubleBE(3) }),
        0x0C: (
          (buf) => {
            var sLen = buf.readUInt32BE(1);
            return { len: 5 + sLen, value: buf.toString("utf8", 5, 5 + sLen) };
          }
        ),
        0x0F: (
          (buf) => {
            var sLen = buf.readUInt16BE(1);
            return { len: 3 + sLen, value: buf.toString("utf8", 3, 3 + sLen) };
          }
        ),
        0x10: function(b) {
          var className = (this[0x02])(b);
          var obj = (this[0x03])(b.slice(className.len - 1));
          obj.value.__className__ = className.value;
          return { len: className.len + obj.len - 1, value: obj.value };
        },
    }
)