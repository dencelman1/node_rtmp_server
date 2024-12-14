
export default (
  (_, a) => {
    var b = Buffer.alloc(5);
    b.writeUInt8(8, 0);
    b.writeUInt32BE((
      (a instanceof Array)
      ? a.length
      : Object.keys(a).length  
    ), 1);
    return Buffer.concat([b, _.object(_, a).subarray(1)]);
  }
)