import {
  array,
  object,
  sarray,
  date,
  longString,
  xmlDoc,
  string,
  typedObject
} from './amf0dec/index.js';

export default ({
  0x00: (_, b) => ({ len: 9, value: b.readDoubleBE(1) }),
  0x01: (_, b) => ({ len: 2, value: !(b.readUInt8(1) === 0) }),
  0x02: string,
  0x03: object,

  0x05: () => ({ len: 1, value: null }),
  0x06: () => ({ len: 1, value: undefined }),
  0x07: (_, b) => ({ len: 3, value: "ref" + b.readUInt16BE(1) }),
  0x08: array,

  0x0A: sarray,
  0x0B: date,
  0x0C: longString,

  0x0F: xmlDoc,
  0x10: typedObject
});
