

export default (
    function(rules, buffer) {
        var k = buffer.readUInt8(0);
        return (
          rules[k]?.(buffer)
        );
    }
)