import type { NitroApp } from 'nitropack';
import { Server as Engine } from 'engine.io';
import { Server } from 'socket.io';
import { defineEventHandler } from 'h3';

const cbMajGamesState = {
  games: []
}

export default defineNitroPlugin((nitroApp: NitroApp) => {
  const engine = new Engine();
  const io = new Server();

  io.bind(engine);

  io.on('connection', (socket) => {
    // ...
    console.log('a user connected', socket);
  });
  io.on('startGame', (socket) => {
    // ...
    console.log('startGame', socket);
  });

  nitroApp.router.use(
    '/socket.io/',
    defineEventHandler({
      handler(event) {
        // @ts-ignore
        engine.handleRequest(event.node.req, event.node.res);
        event._handled = true;
      },
      websocket: {
        open(peer) {
          // @ts-expect-error private method and property
          engine.prepare(peer._internal.nodeReq);
          // @ts-expect-error private method and property
          engine.onWebSocket(
            // @ts-ignore
            peer._internal.nodeReq,
            // @ts-ignore
            peer._internal.nodeReq.socket,
            peer.websocket
          );
        }
      }
    })
  );
});
