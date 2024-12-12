

import {createServer} from "tls";

import {Session} from "#index";
import * as f from './f/index.js';

function Server(
  bind,
  port,
  key,
  cert
) {
  
  this.ee = new (
    this
    .Session
    .prototype
    .EventEmitter
  )();
  this.b = bind;
  this.p = port;

  (
    (
      (
        this
        .Session
      )
      .prototype
    )
    .s = this
  )
  .c = (
    this.create(
      { key, cert },
      this.handle
    )
  );
};

Object.assign(Server.prototype, f);

Server.prototype.create = createServer;
Server.prototype.Session = Session;

Server.prototype.handle = (
  (s) => (
    console.log('data'),
    new Session(s)
    .run(s)
  )
);

export default (
  Server
);
