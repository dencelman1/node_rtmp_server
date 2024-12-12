import {Server} from "#index";
import {readFileSync} from 'fs';
import { join } from "path";
import { parseEnv } from "util";

(
    (e, s, c, read) => (
        ((s = new Server(
            e.HOSTNAME,
            Number(e.PORT),
            read(e.KEY_PATH).toString(),
            read(e.CERT_PATH).toString(),
        )).ee)
        .on(2, (t, d) => (
            console.log(`data ${c++} ${t.ip}`)
        ))
        .on(5, (t, p) => (
            console.log(`packet ${c++} ${t.ip}`)
        )),

        s
        .run(() => console.log(`[ RTMP ]: runned ${s.b}:${s.p}`))
    )
)(
    parseEnv(readFileSync(join(process.cwd(), "env/.env")).toString()),
    null,
    0,
    readFileSync
);