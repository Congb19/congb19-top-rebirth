const sendUserAction = (socket, data) => {
  // Send user action to server
  console.log('User action:', action);
}
const receiveUserAction = (socket, data) => {
  // Receive user action from server
  console.log('User action:', action);
  socket.on('mopai', (data) => {
    console.log('mopai', data);
  });
}

export { sendUserAction, receiveUserAction };