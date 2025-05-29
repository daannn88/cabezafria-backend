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

const getAllReviews = async (req, res)=>{
    try{
        const inData = await reviewModel.find({})
        res.status(200).json(inData)}
    catch(error){
        console.error(error)
        res.status(500).json({msg: 'Error: No se pudo encontrar las reseñas'})
    }
}

const getReviewById =  async (req, res)=>{
    const reviewId = req.params.id;
    try{
        const inData = await reviewModel.findById(reviewId)
        if(inData == null){
            return res.json({msg: 'Reseña no registrada'})
        }
        res.json(inData)
    }
    catch(error){
        console.error(error)
        res.json({msg: 'Error: No se pudo obtener la reseña con el ID'})
    }
}

const updateReviewById = async (req, res)=>{
    const reviewId = req.params.id;
    const data = req.body;
    try{
        const reviewFound = await reviewModel.findOne({_id: reviewId});

        if(!reviewFound){
            return res.status(404).json({msg: 'La reseña que deseas actualizar no existe'})
        }

        const inData = await reviewModel.findByIdAndUpdate(reviewId, data, {new: true});
        res.status(200).json(inData);
    }
    catch(error){
        console.error(error)
        res.status(500).json({msg: 'Error: No se pudo actualizar la reseña'})
    }
}

const deleteReviewById = async (req, res)=>{
    const reviewId = req.params.id;
    
    try{
        const reviewFound = await reviewModel.findOne({_id: reviewId});

        if(!reviewFound){
            return res.status(404).json({msg: 'La reseña que deseas eliminar no existe'})
        }

        const inData = await reviewModel.findByIdAndDelete(reviewId);
        res.statuts(200).json(inData)
    }
    catch(error){
        console.error(error)
        res.status(500).json({msg: 'Error: No se pudo eliminar la reseña'})
    }
}

export{
    createReview,
    getAllReviews,
    getReviewById,
    updateReviewById,
    deleteReviewById
}