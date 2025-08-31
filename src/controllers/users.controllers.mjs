import bcrypt from 'bcrypt';

import usersModel from "../schema/user.schema.mjs";
import productModel from '../schema/product.schema.mjs';

const createUsers = async (req, res) => {
    const inputData = req.body; // extraigo el objeto enviado

    try {
        const userFound = await usersModel.findOne({
            userName: inputData.userName,
            userEmail: inputData.userEmail,
        });

        if (userFound) {
            return res.status(404).json({ msg: 'No pudo registrarse, porque el usuario ya existe' })
        };

        const salt = bcrypt.genSaltSync();

        console.log('salt: ', salt);

        const hashPassword = bcrypt.hashSync(
            inputData.userPassword,
            salt
        );

        console.log('hashPassword: ', hashPassword);

        inputData.userPassword = hashPassword;

        const data = await usersModel.create(inputData);
        res.status(201).json(data)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error: No se pudo registrar el usuario' });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await usersModel.find().populate("userFavorites", "productName productPrice productFavoriteCounter");
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener usuarios" });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await usersModel.findById(req.params.id).populate("userFavorites", "productName productPrice productFavoriteCounter");
        if (!user) return res.status(404).json({ msg: "Usuario no encontrado" });
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener usuario" });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await usersModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ msg: "Usuario no encontrado" });
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al actualizar usuario" });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await usersModel.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ msg: "Usuario no encontrado" });
        res.json({ msg: "Usuario eliminado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al eliminar usuario" });
    }
};

const addFavourite = async (req, res) => {
    try {
        const { id, productId } = req.params;
        console.log("Usuario:", id, "Producto:", productId);

        const user = await usersModel.findById(id);
        if (!user) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        // Evitamos duplicados
        if (user.userFavorites.includes(productId)) {
            return res.status(400).json({ msg: "Producto ya está en favoritos" });
        }

        user.userFavorites.push(productId);
        await user.save();

        await productModel.findByIdAndUpdate(productId, { $inc: { productFavoriteCounter: 1 } });

        res.json({ msg: "Producto agregado a favoritos", favourites: user.userFavorites });
    } catch (error) {
        console.error("Error en addFavorite:", error);
        res.status(500).json({ msg: "Error al agregar a favoritos" });
    }
};
const removeFavourite = async (req, res) => {
    const { id, productId } = req.params;

    try {
        const user = await usersModel.findByIdAndUpdate(
            id,
            { $pull: { userFavorites: productId } },
            { new: true }
        ).populate("userFavorites", "productName productPrice productFavoriteCounter");

        if (!user) return res.status(404).json({ msg: "Usuario no encontrado" });

        await productModel.findByIdAndUpdate(productId, {
            $inc: { productFavoriteCounter: -1 }
        });

        res.json({ msg: "Producto eliminado de favoritos", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al eliminar de favoritos" });
    }
};

const getFavorites = async (req, res) => {
    const { id } = req.params; // id del usuario logueado

    try {
        const user = await usersModel.findById(id)
            .populate("userFavorites"); // traemos los productos completos

        if (!user) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        res.json(user.userFavorites); // solo los favoritos
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener favoritos" });
    }
};

export {
    createUsers,
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser,
    addFavourite,
    removeFavourite,
    getFavorites
}