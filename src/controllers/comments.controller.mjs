import commentsModel from '../schema/comments.schema.mjs';
import usersModel from '../schema/user.schema.mjs';


const addComment = async (req, res) => {

    const inputData = req.body;

    try {
        const newComment = new  commentsModel({
            commentUserId: inputData.commentUserId, // Si el usuario está autenticado, se guarda su ID, si no, se deja como null
            commentUserName: inputData.commentUserName || 'Anonimo', // Si el usuario está autenticado, se guarda su nombre, si no, se usa 'Anónimo'
            commentUserEmail: inputData.commentUserEmail || 'Anonimo',
            content: inputData.content
        });

        await newComment.save();

        res.status(201).json({ message: 'Comentario agregado con éxito.', content: newComment });

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

export { addComment, deleteComment };

