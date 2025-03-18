import type { NitroApp } from 'nitropack';
import { Server as Engine } from 'engine.io';
import { Server } from 'socket.io';
import { defineEventHandler } from 'h3';

const socketMap = new Map();
const cbMajGamesState = {
  games: [],
  activePlayers: new Set(),
  rooms: {
    1: [],
    2: []
  }
};

export default defineNitroPlugin((nitroApp: NitroApp) => {
  const engine = new Engine();
  const io = new Server();

  io.bind(engine);

  io.on('connection', (socket) => {
    // ...
    console.log('a user connected');
    // 根据id维护socketMap
    socketMap.set(socket.id, socket);
    socket.on('joinRoom', (data) => {
      console.log('joinRoom', data);
    });
    socket.on('exitRoom', (data) => {
      console.log('exitRoom', data);
    });
    socket.on('sendMessageTest', (data) => {
      console.log('sendMessageTest', data);
    });
  });
  io.on('disconnect', (socket) => {
    //
    console.log('a user disconnect');
    socketMap.delete(socket.id);
    cbMajGamesState.activePlayers.delete(socket.id);
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
