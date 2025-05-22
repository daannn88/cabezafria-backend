//controller: Controlar el flujo de peticiones y respuesta de clientes

const createProduct = (req, res)=>{
    const inData = req.body;
    console.log(inData);

    res.send(inData);

    res.send('se crea un producto');
}

export {createProduct};