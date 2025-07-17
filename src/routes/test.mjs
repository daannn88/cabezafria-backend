import express from 'express'

const router = express.Router();

router.get('/', (req, res)=>{
    res.json({msg: 'BackEnd desplegado con exito'})
});

export default router;