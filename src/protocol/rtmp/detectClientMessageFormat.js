

export default (
    function(csig) {
        var
            sdl = 0,
            SHA256DL = 0,
            GenuineFPConst = null
        ;
        return (
            this.calcHmac(
                (
                    Buffer.concat([csig.substring(0, (
                        sdl = this.GetServerGenuineConstDigestOffset(csig.substring(772, 776))            
                    )), csig.substring(sdl + (SHA256DL = this.SHA256DL))], 1504)
                ),
                (GenuineFPConst = this.GenuineFPConst)
            )
            .equals(csig.substring(sdl, sdl + SHA256DL))
            ? this.MESSAGE_FORMAT_2
            :

            this.calcHmac(
                (

                    Buffer.concat([csig.substring(0, (
                        sdl = this.GetClientGenuineConstDigestOffset(csig.substring(8, 12))
                    )), csig.substring(sdl + SHA256DL)], 1504)

                ),
                GenuineFPConst
            )
            .equals(
                csig.substring(sdl, sdl + SHA256DL)
            )
            ? this.MESSAGE_FORMAT_1
            : this.MESSAGE_FORMAT_0
        );
    }
)