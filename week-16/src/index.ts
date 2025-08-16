import { WebSocketServer, WebSocket } from 'ws'

const wss = new WebSocketServer({port: 8080});

// wss.on("connection", function(socket) {
//     socket.on("message", (e)=>{
//         if(e.toString() === "ping"){
//             socket.send("pong");
//         }
//     })
// })
let userCount = 0;
interface User {
    socket: WebSocket;
    room: string;
}
let allSockets: User[] = [];
wss.on("connection", function(socket){
    // allSockets.push(socket);
    // userCount = userCount + 1;

    socket.on("message", (message)=> {
        //normal chat 
        // for(let i = 0; i < allSockets.length; i++) {
        //     const s = allSockets[i];
        //     s.send(message.toString() + ": sent from the server");
        // }

        // @ts-ignore
        const parsedMessage = JSON.parse(message);
        if(parsedMessage.type === "join") {
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            })
        }

    })
    socket.on("disconnect", ()=>{
        // allSockets = allSockets.filter(x => x != socket)
    })
})