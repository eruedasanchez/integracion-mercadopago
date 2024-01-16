import express from "express";
import cors from 'cors'; // para poder hacer peticiones del frontend al server
import { router as mercadoPagoRouter } from "./router/mercadoPago.router.js";

const server = express();

// Middlewares
server.use(express.json());
server.use(cors());
server.use('/mercadoPago', mercadoPagoRouter); // cuando pasemos por este middleware y la peticion del frontend es MP, salta a Mercado_Pago y cuando se diriga al endpoint verificara que metodo tiene (GET, POST, PUT, DELETE) 
























export default server;
