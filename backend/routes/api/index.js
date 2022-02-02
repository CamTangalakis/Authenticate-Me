const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const checkinRouter = require('./checkins')
const commentRouter = require('./comments')
const strainRouter = require('./strains')
const favStrainRouter = require('./favoriteStrain')
const ratingRouter = require('./rating')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/checkins', checkinRouter)
router.use('/comments', commentRouter)
router.use('/strains', strainRouter)
router.use('/ratings', ratingRouter)
// router.use('/favStrain', favStrainRouter)

router.post('/test/', function(req, res) {
    res.json({ requestBody: req.body });
});

module.exports = router;
