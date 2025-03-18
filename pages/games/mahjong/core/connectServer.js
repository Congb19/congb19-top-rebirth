const { socket } = useSocket()
console.log(socket)
export default () => {

  const isConnected = ref(false);
  const transport = ref("N/A");

  if (socket.connected) {
    console.log('already socket connected')
    onConnect();
  }
  function onConnect() {
    isConnected.value = true;
    transport.value = socket.io.engine.transport.name;
    console.log('socket onConnect')

    socket.io.engine.on("upgrade", (rawTransport) => {
      transport.value = rawTransport.name;
    });
  }

  function onDisconnect() {
    isConnected.value = false;
    transport.value = "N/A";
  }

  socket.on("connect", onConnect);
  socket.on("disconnect", onDisconnect);

  onBeforeUnmount(() => {
    socket.off("connect", onConnect);
    socket.off("disconnect", onDisconnect);
  });

  return {
    isConnected,
    transport,
    socket
  }
}
