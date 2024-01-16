import server from "./src/server.js";

const PORT = 4000;
server.listen(PORT, () => console.log(`Server levantado con exito en el puerto ${PORT}!`))