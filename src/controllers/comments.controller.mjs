import commentsModel from '../schema/comments.schema.mjs';

const addComment = async (req, res) => {

    const { productId } = req.params;
    const { inputData } = req.body;

    if (!text) {
        return res.status(400).json({ message: 'El texto del comentario es obligatorio.' });
    }
    try {
        const newComment = new Comment({
            inputData,
            product: productId,
            user: userName
        });

        await newComment.save();

        res.status(201).json({ message: 'Comentario agregado con éxito.', comment: newComment });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error del servidor al agregar el comentario.' });
    }
};

const deleteComment = async (req, res) => {
    const { commentId } = req.params;
    const { userId, role } = req.user;

    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        return res.status(400).json({ message: 'ID del comentario no válido.' });
    }

    try {
        const comment = await Comment.findById(commentId);

        if (!comment) {
            return res.status(404).json({ message: 'Comentario no encontrado.' });
        }

        // Verificar si el usuario es el autor del comentario o un administrador
        if (comment.user.toString() !== userId && !role.includes('admin')) {
            return res.status(403).json({ message: 'No tienes permiso para eliminar este comentario.' });
        }
        
        await comment.remove();

        res.status(200).json({ message: 'Comentario eliminado con éxito.' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error del servidor al eliminar el comentario.' });
    }
};

const getCommentsByProduct = async (req, res) => {
    const { productId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ message: 'ID del producto no válido.' });
    }

    try {
        const comments = await Comment.find({ product: productId })
            .populate('user', 'name') // Traemos el nombre del usuario que comentó
            .sort({ createdAt: -1 }); // Ordenamos del más nuevo al más viejo

        res.status(200).json({ comments });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error del servidor al obtener los comentarios.' });
    }
};
export { addComment, deleteComment, getCommentsByProduct };

