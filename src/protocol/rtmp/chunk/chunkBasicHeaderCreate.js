

export default (
    function(fmt, cid) {
        var out = null;
        if (cid >= 64 + 255) {
            (
                out = Buffer.alloc(3)
            )[0] = (fmt << 6) | 1;
            out[1] = (cid - 64) & 0xff;
            out[2] = ((cid - 64) >> 8) & 0xff;
        } else if (cid >= 64) {
            (
                out = Buffer.alloc(2)
            )[0] = (fmt << 6) | 0;
            out[1] = (cid - 64) & 0xff;
        } else {
            (out = Buffer.alloc(1))[0] = (fmt << 6) | cid;
        }

        return out;
    }
)