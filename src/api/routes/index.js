const express = require('express');

const distroRoutes = require('./distroRoutes');

const router = express.Router();

router.use('/distros', distroRoutes);

module.exports = router;