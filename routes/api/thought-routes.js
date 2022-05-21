const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought)
    .post(addThought)


router
    .route('/:userId')
    


router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(deleteThought)
    .put(updateThought)
    


router
    .route('/:thoughtId')
    .get(getThoughtById)


router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(deleteReaction)



module.exports = router;