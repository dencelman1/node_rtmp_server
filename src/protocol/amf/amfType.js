
export default (o) => {
    var t = "";
    return (
        (o === null)
        ? "null"
        :
        ((t = typeof o) == "number")
        ? (
            (parseInt(o) == o)
            ? "integer"
            : "double"
        )
        :
        (t == "boolean")
        ? o.toString()
        :
        (t == "object")
        ? (
            (o instanceof Array)
            ? (
              (o.sarray)
              ? "sarray"
              : "array"
            )
            : "object"
        )
        : t
    );
}