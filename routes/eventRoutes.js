const express = require('express');
const router = express();
const eventController = require('../controllers/eventControllers');
const authMiddleware = require('../middlewares/authMiddleware');
const uploadMiddleware = require('../middlewares/uploadMiddleware');

router.post('/',  uploadMiddleware.single('image'), eventController.createEvent);

module.exports = router;
