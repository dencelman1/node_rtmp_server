
export default (
    (t) => {
        var
            c = (
                (d) => (f) => (
                    f(t, d)
                )
            ),
            e = t.s.ee
        ;
        return (d) => {
            var E = null;
            return (
                e.emit(2, c(d)),

                (E = t.parserData(d))
                &&
                (
                    console.error(E),
                    t.sc.end()
                ),
                t
            );
        }
    }
)