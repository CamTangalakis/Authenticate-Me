const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const checkinRouter = require('./checkins')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/checkin', checkinRouter)

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});

module.exports = router;
