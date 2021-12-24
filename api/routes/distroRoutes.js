const express = require('express');
const { check } = require('express-validator');

const validate = require('../middleware/validate.js');
const distroController = require('../controllers/distroController.js');

const router = express.Router();

router.post(
    '/distros',
    validate([
        check('name').not().isEmpty().isLength({ min: 3 }).withMessage('name must have more than 3 characters').trim(),
        check('currentVersion').not().isEmpty().withMessage('currentVersion cannot be blank').trim(),
        check('basedOn').not().isEmpty().withMessage('basedOn cannot be blank').trim(),
        check('website').not().isEmpty().isURL().withMessage('website must be a valid url').trim()
    ]), 
    distroController.addDistro
);
router.get('/distros', distroController.getAllDistros);
router.get('/distros/:name', distroController.getDistroByName);
router.put('/distros/:name', distroController.editDistroInfo);
router.delete('/distros/:name', distroController.deleteDistro);

module.exports = router;