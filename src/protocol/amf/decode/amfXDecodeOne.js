

export default (
  function(b) {
    return (
      (this.rules)[
        b.readUInt8(0)
      ]
      ?.(
        this,
        b,
        0
      )
    );
  }
)