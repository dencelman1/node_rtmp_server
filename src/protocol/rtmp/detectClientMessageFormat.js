

export default (
    function(sg) {
        var
            sdl = 0,
            SHA256DL = 0,
            GenuineFPConst = ""
        ;
        return (
            this.calcHmac(
                Buffer.concat(
                    [
                        sg.slice(
                            0,
                            (
                                sdl =
                                    this
                                    .GetServerGenuineConstDigestOffset(
                                        sg.slice(772, 776)
                                    )
                            )
                        ),
                        sg.slice(sdl + (SHA256DL = this.SHA256DL))
                    ],
                    1504
                ),
                (GenuineFPConst = this.GenuineFPConst)
            )
            .equals(
                sg.slice(
                    sdl,
                    sdl + SHA256DL
                )
            )
            ? 2
            :

            this.calcHmac(
                Buffer.concat(
                    [
                        sg.slice(
                            0,
                            (
                                sdl =
                                    this
                                    .GetClientGenuineConstDigestOffset(
                                        sg.slice(8, 12)
                                    )
                            )
                        ),
                        sg.slice(sdl + SHA256DL)
                    ],
                    1504
                ),
                GenuineFPConst
            )
            .equals(
                sg.slice(
                    sdl,
                    sdl + SHA256DL
                )
            )
            ? 1
            : 0
        );
    }
)