

export default (
    function(
        sg,
        mf // this.detectClientMessageFormat(sg)
    ) {
        return (
            Buffer.concat(
                ( mf === 0 )
                ? [Buffer.alloc(1, 3), sg, sg]
                : [Buffer.alloc(1, 3), this.generateS1(mf), this.generateS2(mf, sg)]
            )
        )
    }
)