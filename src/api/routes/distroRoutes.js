const express = require('express');

const distroController = require('../controllers/distroController');
const validation = require('../validation/auth');

const router = express.Router();

router.get('/', distroController.getAllDistros);
router.post('/', validation.distro, distroController.postDistro);
router.get('/:name', distroController.getDistro);
router.put('/:name', distroController.updateDistro);
router.delete('/:name', distroController.deleteDistro);

module.exports = router;