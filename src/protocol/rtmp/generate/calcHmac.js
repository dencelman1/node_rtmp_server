import {createHmac} from "crypto";


export default (
    (d, k) => (
        createHmac("sha256", k)
        .update(d)
        .digest()
    )
)