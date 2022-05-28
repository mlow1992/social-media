const { getAllThoughts, addThought, getThoughtById, removeThought, updateThought, addReaction, removeReaction } = require('../../controllers/thought-controller');

const router = require('express').Router();

router.route('/')
    .get(getAllThoughts);

router.route('/:id')
    .get(getThoughtById)
    .put(updateThought);

router.route('/:userId')
    .post(addThought);

router.route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought);

router.route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router