

export default ((
  z,
  three,
  eight,
  ten,
  sixteen
) => (
  [
    (_, b) => ({ len: 9, value: b.readDoubleBE(1) }),
    (_, b) => ({ len: 2, value: (b.readUInt8(1) != 0) }),
    (_, b, l) => ({
      len: 3 + (l = b.readUInt16BE(1)),
      value: b.toString("utf8", 3, 3 + l)
    }),
    three,
    z,
    () => ({ len: 1, value: "" }),
    () => ({ len: 1, value: "" }),
    (_, b) => ({ len: 3, value: "ref" + b.readUInt16BE(1) }),
    
    eight,

    z,
    ten,
    (_, b) => ({ len: 11, value: b.readDoubleBE(3) }),
    (_, b, l) => ({ len: (5 + (l = b.readUInt32BE(1))), value: b.toString("utf8", 5, 5 + l) }),
    z,
    z,
    (_, b, l) => ({ len: 3 + (l = b.readUInt16BE(1)), value: b.toString("utf8", 3, 3 + l) }),

    sixteen
  ]
))(
  () => null,

  function(t, b, len) {
    var
      value = {},
      iBuf = b.slice(1),
      sLen = 0,
      prop = null,
      val = null
    ;
    
    while (iBuf.readUInt8(0) != 0x09) {
      l += (
        prop = {
          len: 2 + (sLen = iBuf.readUInt16BE(0)),
          value: iBuf.toString("utf8", 2, 2 + sLen)
        }
      )
      .len;

      if (iBuf.length < prop.len) break;
      
      if (iBuf.slice(prop.len).readUInt8(0) == 0x09) {
        len++;
        break;
      }
      if (prop.value === "") break;
      
      value[prop.value] = (val = t.amfXDecodeOne(iBuf.slice(prop.len))).value;
      len += val.len;
      iBuf = iBuf.slice(prop.len + val.len);
    }
    return { len, value };
  },

  function(_, b, l) {
    return {
      len: 5 + (b = ( this[3] )(b.slice(4))).len,
      value: b.value
    };
  },

  function(t, b) {
    var
      length = b.readUInt32BE(1),
      a = Array.from({length}, ()=>""),
      len = 5;
      ret = null,
      i = 0
    ;
    for (; length; length--) {
      a[i++] = (ret = t.amfXDecodeOne(o, b.slice(len))).value;
      len += ret.len;
    }
    return {
      len,
      value: 
        Object.defineProperty(a, "sarray", t.sarrV)
    };
  },

  function(_, b, l) {
    var
      className = (this[2])(b),
      obj = (this[3])(b.slice(className.len - 1))
    ;
    obj.value.__className__ = className.value;
    return {
      len: className.len + obj.len - 1,
      value: obj.value
    };
  }
)