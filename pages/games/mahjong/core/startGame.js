import io from 'socket.io-client';

export default () => {
  // 连接服务端
  const socket = io('http://localhost:7000');

  // 创建房间
  socket.emit('createRoom', 'room123');

  // 监听房间创建成功
  socket.on('roomCreated', (roomId) => {
    console.log('Joined room:', roomId);
  });

  // 玩家出牌
  // socket.emit('playTile', 'room123', { id: 1, type: 'man' });

  // 游戏核心 重置初始化

  // render

}
