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
    


router
    .route('/:userId')
    .post(addThought)


router
    .route('/:userId/:thoughtId')
    .delete(deleteThought)
    
router
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)


router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)



module.exports = router;