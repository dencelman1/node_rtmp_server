import {Server, e, EventEmitter} from "#index";

import {readFileSync, writeFileSync} from 'fs';
import { join } from "path";
import { parseEnv } from "util";


((log, p) => (
    (console.log = (v) => (
        writeFileSync( p, readFileSync(p).toString() + "\n\n" + v ),
        log(v)

    )),
    (
        console.dir = (o) => (
            writeFileSync( p, readFileSync(p).toString() + "\n\n" + (JSON.stringify(o, null, 4)) )
        )
    )
))(
    console.log,
    join(process.cwd(), "log.txt")
);

(
    (
        E, s, c, read, e, EventEmitter, ek
    ) => (
        (
            s = (
                new Server(
                    E.HOSTNAME,
                    Number(E.PORT),
                    read(E.KEY_PATH).toString(),
                    read(E.CERT_PATH).toString(),

                    new EventEmitter( true )
                    .on(
                        e.ALL,
                        (t, E) => (
                            console.log(`${ek[E]} ${c++}`)
                        )
                    )
                )
            )
        )
        .run(() => console.log(`[ RTMP ]: runned ${s.b}:${s.p}`))
    )
)(
    parseEnv(readFileSync(join(process.cwd(), "env/.env")).toString()),
    null,
    0,
    readFileSync,
    e,
    EventEmitter,
    Object.keys(e)
);