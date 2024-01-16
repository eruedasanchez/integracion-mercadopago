import express from 'express';

export const router = express.Router(); 

// creamos el endpoint POST para poder enviarle la data a MP
router.post('/', async (req,res) => {
    try {
        return res.status(201).json({status:'ok'});
    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message);
    }
});