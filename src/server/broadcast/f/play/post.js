

export default (
    (session) => {
        return (
            (
                (this.rtmpMetaData)
                ? session.sendBuffer(this.rtmpMetaData)
                :
                (this.rtmpAudioHeader)
                ? session.sendBuffer(this.rtmpAudioHeader)
                :
                (this.rtmpVideoHeader)
                ? session.sendBuffer(this.rtmpVideoHeader)
                :
                (this.rtmpGopCache)
                &&
                this.rtmpGopCache.forEach((v) => session.sendBuffer(v))
            ),
            this.subscribers.set(session.id, session),
            this
        )
    }
)