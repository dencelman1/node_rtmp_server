

export default (
  function(b) {
    var
      rp = [],
      r = null,
      i = 0
    ;
    for (; i < b.length;) {
      i += (r = this.amfXDecodeOne(b.slice(i))).len;
      rp.push(r.value);
    }
    return rp;
  }
)
