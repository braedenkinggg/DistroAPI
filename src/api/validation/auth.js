const { validationResult, check } = require("express-validator");

exports.distro = [
    check('name').not().isEmpty().isLength({ min: 3 }).withMessage('name must have more than 3 characters').trim().toLowerCase(),
    check('currentVersion').not().isEmpty().withMessage('currentVersion cannot be blank').trim().toLowerCase(),
    check('basedOn').not().isEmpty().withMessage('basedOn cannot be blank').trim().toLowerCase(),
    check('website').not().isEmpty().isURL().withMessage('website must be a valid url').trim().toLowerCase(),

    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        next();
    }
];