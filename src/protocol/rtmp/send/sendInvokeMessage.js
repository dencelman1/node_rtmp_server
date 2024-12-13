

export default (
    function(sid, opt) {
        var
            p = new this.RtmpPacket(),
            cmd = ""
        ;
        p.fmt = 0;
        p.cid = 3;
        p.type = 20;
        p.stream_id = sid;

        p.length = (
            p.payload = this.encodeAmf0Cmd(
                this.reduce,
                this.rtmpCmdCode[cmd = opt.cmd],
                this.amfXEncodeOne(cmd)
            )
        )
        .length;
        this.onOutput(this.chunksCreate(p));
        return this;
    }
)