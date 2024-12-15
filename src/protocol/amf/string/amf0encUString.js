

export default (
  (str) => {
    var
      d = Buffer.from(str, "utf8"),
      l = Buffer.alloc(2)
    ;
    return (
      l.writeUInt16BE(d.length, 0),
      Buffer.concat([l, d])
    );
  }
)