

export default (
    (
        _,
        sg,
        mf // this.detectClientMessageFormat(sg)
    ) => (
        Buffer.concat(
            ( mf === 0 )
            ? [Buffer.alloc(1, 3), sg, sg]
            : [Buffer.alloc(1, 3), _.generateS1(_, mf), _.generateS2(_, mf, sg)]
        )
    )
    
)