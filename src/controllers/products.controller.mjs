import productModel from "../schema/product.schema.mjs";

const createProduct = async (req, res)=>{
    const inData = req.body;//extraigo el objeto enviado

    try{const registeredProduct = await productModel.create(inData);

    console.log(registeredProduct);        //Imprime en la consola
    res.status(201).json(registeredProduct);      //Enviando la respuesta del cliente
    }
    catch(error){
        console.error(error);
        res.status(500).json({msg: 'Error: No se pudo registrar el producto'});
    }
}

const getAllProducts = async (req, res)=>{
    try{
        const data = await productModel.find({});
        res.json(data);
    }
    catch(error){
        console.error(error)
        res.json({msg: 'Error: No se pudo obtener el listado de productos'})
    }
};

export {
    createProduct,
    getAllProducts
}