const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addUserFriend,
    removeUserFriend
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUser)
    .post(createUser);


router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);


router
    .route('/:userId/friends/:friendId')
    .post(addUserFriend)
    .delete(removeUserFriend);


module.exports = router;