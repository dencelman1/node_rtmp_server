

export default (
    function(rules, b) {
        var
          resp = [],
          res = null,
          i = 0
        ;
        for (; i < b.length;) {
          i += (res = this.amfXDecodeOne(rules, b.slice(i))).len;
          resp.push(res.value);
        }
        return resp;
    }
)