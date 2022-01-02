const express = require('express');
const router = express.Router();

const { distroController } = require('../controllers');

router.get('/', distroController.getAllDistros);
router.get('/:name', distroController.getDistro);
router.post('/', distroController.postDistro);
router.put('/:name', distroController.updateDistro);
router.delete('/:name', distroController.deleteDistro);

module.exports = router;