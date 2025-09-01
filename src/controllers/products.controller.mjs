// import { sanitizeJSON } from "../helpers/sanitize.helper.mjs";
import productModel from "../schema/product.schema.mjs";

const createProduct = async (req, res) => {
    const inData = req.body;//extraigo el objeto enviado

    try {
        const registeredProduct = await productModel.create(inData);

        console.log(registeredProduct);        //Imprime en la consola
        res.status(201).json(registeredProduct);      //Enviando la respuesta del cliente
    }

    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error: No se pudo registrar el producto' });
    }
}

const getAllProducts = async (req, res) => {
    try {
        const inData = await productModel.find({}).populate(['productCategory']);
        res.json(inData);
    }
    catch (error) {
        console.error(error)
        res.json({ msg: 'Error: No se pudo obtener el listado de productos' })
    }
};

const getAllProductsByBrand = async (req, res) => {
    const inputData = req.body;

    try {
        const inData = await productModel.find({ productBrand: inputData.productBrand, productState: true });
        res.json(inData);
    }
    catch (error) {
        console.error(error)
        res.json({ msg: 'Error: No se pudo obtener el listado de productos' })
    }
};

const getProductById = async (req, res) => {
    const productId = req.params.id;

    try {
        const inData = await productModel.findById(productId).populate('productCategory');
        if (!inData) {
            return res.json({ msg: 'No se pudo encontrar el producto' })
        }
        res.json(inData)
    }
    catch (error) {
        console.error(error)
        res.json({ msg: 'Error: No se pudo encontrar el producto' })
    }
};

const deleteProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const inData = await productModel.findByIdAndDelete(productId);
        if (inData == null) {
            return res.json({ msg: 'El producto NO SE ENCUENTRA REGISTRADO.' })
        }

        res.json({ data: inData, mgs: 'Se elimino el producto' });
    }
    catch (error) {
        console.error(error)
        res.json({ msg: 'No se pudo eliminar el producto.' })
    }
};

const updateProductById = async (req, res) => {
    const productId = req.params.id;
    const inData = req.body;
    try {
        const data = await productModel.findByIdAndUpdate(productId, inData, { new: true });
        res.json(data)
    }
    catch (error) {
        console.error(error);
        res.json({ msg: 'No se pudo actualizar el producto' });
    }
}

export {
    createProduct,
    getAllProducts,
    getProductById,
    deleteProductById,
    updateProductById,
    getAllProductsByBrand
}