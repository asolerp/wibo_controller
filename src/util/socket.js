import { useState, useEffect } from 'react'
import socketIOClient from "socket.io-client"


const SocketConnection = (serverUrl, topic) => {
  const [data, setData] = useState(0);
  const [isConnected, setConnected] = useState(false);

  useEffect(() => {
      const client = socketIOClient.connect(serverUrl);
      client.on("connect", () => setConnected(true));
      client.on("disconnect", () => setConnected(false));
      client.on(topic, (data) => {
          console.log(data)
          setData(data);
      })
  }, [serverUrl, topic]);

  return { data, isConnected };
}

export default SocketConnection;