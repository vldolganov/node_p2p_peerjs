const express = require('express');

const router = express.Router();

const { getRoom, redirectRoom } = require('../controllers');

router.get('/', redirectRoom);
router.get('/:room', getRoom);

module.exports = router;
