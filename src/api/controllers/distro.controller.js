const Distro = require('../models/Distro');
const HttpError = require('../utils/HttpError');

async function getDistro(req, res, next) {
    try {
        const data = await Distro.findOne({ name: req.params.name });

        if (!data) {
            return next(new HttpError(404, 'Not Found'));
        }

        return res.status(200).json(data);
    } catch (err) {
        next(err);
    }
}

async function getAllDistros(req, res, next) {
    try {
        const data = await Distro.find();

        if (data.length === 0) {
            return res.status(200).json('Nothing to see here');
        }

        return res.status(200).json(data);
    } catch (err) {
        next(err);
    }
}

async function postDistro(req, res, next) {
    try {
        const data = Distro.create({
            name: req.body.name,
            currentVersion: req.body.currentVersion,
            basedOn: req.body.basedOn,
            website: req.body.website
        });

        return res.status(200).json({ success: `Created ${data.name}`, data });
    } catch (err) {
        next(err);
    }
}

async function deleteDistro(req, res, next) {
    try {
        const data = await Distro.findOneAndDelete({ id: req.params.id });

        if (!data) {
            return next(new HttpError(404, 'Not Found'));
        }

        return res.status(200).json({ success: `Deleted ${data.name}`, data });
    } catch (err) {
        next(err);
    }
}

async function updateDistro(req, res, next) {
    try {
        const data = await Distro.findOneAndUpdate(
            {
                name: req.params.name
            },
            {
                name: req.body.name,
                currentVersion: req.body.currentVersion,
                basedOn: req.body.basedOn,
                website: req.body.website
            },
            {
                new: true
            }
        );

        if (!data) {
            return next(new HttpError(404, 'Not Found'));
        }

        return res.status(200).json({ success: `Updated ${req.params.name}`, data });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getDistro,
    getAllDistros,
    postDistro,
    updateDistro,
    deleteDistro
}