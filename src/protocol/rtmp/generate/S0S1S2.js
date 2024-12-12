

export default (
    function(clientsig) {
        var
            clientType = Buffer.alloc(1, 3),
            messageFormat = this.detectClientMessageFormat(clientsig)
        ;
        return (
            (messageFormat === this.MESSAGE_FORMAT_0)
            ? Buffer.concat([clientType, clientsig, clientsig])
            : Buffer.concat([clientType, this.generateS1(messageFormat), this.generateS2(messageFormat, clientsig)])
        )
    }
)