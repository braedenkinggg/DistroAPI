const express = require('express');

const distroRoutes = require('./distro.routes.js');

const router = express.Router();

router.use('/distros', distroRoutes);

module.exports = router;