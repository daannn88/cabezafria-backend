import reviewModel from "../schema/reviews.schema.mjs"

const createReview = async (req, res)=>{
    const inData = req.body;
    try{
    const reviewCreated = await reviewModel.create(inData);
    res.status(201).json(reviewCreated)
    }
    catch(error){
        console.error(error)
        res.json({msg: 'No se pudo crear la reseña'})
    }
}


export{
    createReview
}