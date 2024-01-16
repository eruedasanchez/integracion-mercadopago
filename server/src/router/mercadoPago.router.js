// archivo mercadopago.router.js

import express from 'express';
import mercadopago from 'mercadopago';
import dotenv from 'dotenv';

dotenv.config();
export const router = express.Router();

// configuracion de mercadopago
mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN || ''
})


// creamos el endpoint POST para poder enviarle la data a MP
router.post('/', async (req,res) => {
    try {
        const product = req.body;
        console.log('products:', product);
        // creacion del array de productos que se le envia a MP para procesar la compra
        const preference = {
            items: [
                {
                    title: product.title, 
                    unit_price: product.price,
                    currency_id: 'ARS',
                    description: product.description,
                    quantity: product.quantity
                }
            ],
        // const preference = {
        //     items: products.map(product => {
        //         const item = {
        //             title: product.title, 
        //             unit_price: product.price,
        //             currency_id: 'ARS',
        //             description: product.description,
        //             quantity: product.quantity
        //         }
        //         return item;
        //     }), 
            // [
            //     {
            //         title: 'Computadora prueba uno', 
            //         picture_url: 'http://hola',
            //         unit_price: 201,
            //         currency_id: 'ARS',
            //         description: 'Esto es una computadora de prueba uno',
            //         quantity: 3
            //     },
            //     {
            //         title: 'Computadora prueba dos', 
            //         picture_url: 'http://holados',
            //         unit_price: 202,
            //         currency_id: 'ARS',
            //         description: 'Esto es una computadora de prueba dos',
            //         quantity: 2
            //     }
            // ],
            back_urls: {
                success: 'http://localhost:5173/',
                failure: 'http://localhost:3000/failure'
            },
            auto_return: 'approved'
        }

        const responseMP = await mercadopago.preferences.create(preference);
        // const { response } = await mercadopago.preferences.create(preference);
        // console.log('responseMP:', responseMP);
        console.log('response back:', responseMP.response.init_point);
        
        // return res.redirect(responseMP.response.init_point);
        // return res.status(201).json({respuestaMP: responseMP.response.init_point});
        return res.status(201).json(responseMP.response.init_point);
    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message);
    }
});