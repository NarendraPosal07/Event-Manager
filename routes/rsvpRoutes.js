const express = require('express');
const router = express.Router();
const rsvpController = require('../controllers/rsvpControllers');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/:eventId/rsvp', authMiddleware, rsvpController.rsvpToEvent);

module.exports = router;
