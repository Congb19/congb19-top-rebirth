import { io } from 'socket.io-client';

export const useSocket = () => {
  return { socket: io() };
};
