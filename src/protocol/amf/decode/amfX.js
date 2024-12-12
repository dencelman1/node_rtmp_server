

export default (
    function(b) {
        var
          resp = [],
          res = null,
          i = 0
        ;
        for (; i < b.length;) {
          i += (res = this.amfXDecodeOne(b.slice(i))).len;
          resp.push(res.value);
        }
        return resp;
    }
)