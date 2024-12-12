

export default (
    
    function(size) {
        var
            id = "",
            i = 0
        ;
        while (true) {
            i = this.step;
            while (i--) {
                if (
                    (
                        id += this.alphabet[this.random(this.step)[i] & this.mask] || ""
                    )
                    .length >= (
                        size
                        ||
                        this.defaultSize
                    )
                ) return id;
            }
        }
    }
    
)