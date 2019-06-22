const router = require('express').Router();

router.get('/user', (req, res) => res.send("I'm here"));

module.exports = router;