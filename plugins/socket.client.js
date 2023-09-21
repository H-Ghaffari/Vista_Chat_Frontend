import { io } from "socket.io-client";
export default defineNuxtPlugin((nuxtApp) => {
  let socket = io("http://localhost:3001");
  return {
    provide: {
      socket: {
        io: socket,
      },
    },
  };
});
