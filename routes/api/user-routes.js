const router = require('express').Router();
const { getAllUser, createUser, updateUser, getUserById, deleteUser } = require('../../controllers/user-controller');

router.route('/').get(getAllUser).post(createUser);

router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;