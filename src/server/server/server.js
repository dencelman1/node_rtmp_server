

import {createServer} from "tls";

import {Session} from "#index";
import * as f from './f/index.js';

export default (
  Object.setPrototypeOf(
    function (ctx) {
      this.ctx = ctx;
      this.tcpServer = (
        createServer(
          (
            s // socket
          ) => (
            new Session(this.ctx, s).run()
          )
        )
      );
    },
    f
  )
);

module.exports = NodeRtmpServer;
