

export default (
    (eq, GenuineFPConst) => (_, sg) => {
        var
            calcHmac = null
        ;
        
        return (
            eq(
                (calcHmac = _.calcHmac),
                sg,
                _.GetServerGenuineConstDigestOffset(
                    sg.slice(772, 776)
                ),
                0,
                GenuineFPConst
            )
            ? 2
            :
            eq(
                calcHmac,
                sg,
                _.GetClientGenuineConstDigestOffset(
                    sg.slice(8, 12)
                ),
                0,
                GenuineFPConst
            )
            ? 1
            : 0
        );
    }
)(
    (
        calcHmac,
        sg,
        sdl,
        SHA256DL, // 0
        GenuineFPConst
    ) => (
        calcHmac(
            Buffer.concat(
                [
                    sg.slice(0, sdl),
                    sg.slice(SHA256DL = ( 32 + sdl ))
                ],
                1504
            ),
            GenuineFPConst
        )
        .equals(
            sg.slice( sdl, SHA256DL )
        )
    ),
    "Genuine Adobe Flash Player 001"
)