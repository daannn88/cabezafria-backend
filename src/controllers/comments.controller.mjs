import commentsModel from "../schemas/comments.schema.mjs"

const createComments = async (req, res ) =>{
    

    const content = await commentsModel.create(inputData)
    res.status(201).json(content)
}

//exponer cada funcionalidad definida en este archivo
export{
    createComments
}
    