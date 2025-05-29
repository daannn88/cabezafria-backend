import favouriteModel from "../schemas/fovourite.schema.mjs"

const createfavourite = async ( req, res ) => {
    const inputData = req.body;

    const data = await favouriteModel.create( inputData );
    res.status( 201 ).json( data );
}

export {
    createfavourite
}