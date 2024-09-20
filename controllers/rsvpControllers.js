const RSVP = require('../models/rsvpModel');
const Event = require('../models/eventModel');

const rsvpToEvent = async (req, res) => {
    try {
        const { status } = req.body;
        const event = await Event.findById(req.params.eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        const existingRSVP = await RSVP.findOne({ user: req.user._id, event: req.params.eventId });
        if (existingRSVP) {
            return res.status(400).json({ message: 'You have already RSVP\'d to this event' });
        }

        const rsvp = new RSVP({
            user: req.user._id,
            event: req.params.eventId,
            status,
        });

        await rsvp.save();
        res.status(201).json(rsvp);
    } catch (error) {
        res.status(500).json({ message: 'Error while RSVPing', error });
    }
};

module.exports = {
    rsvpToEvent
}