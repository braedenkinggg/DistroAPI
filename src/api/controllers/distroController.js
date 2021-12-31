const Distro = require('../models/Distro');
const HttpError = require('../utils/HttpError');

const getDistro = async (req, res, next) => {
    try {
        const data = await Distro.findOne({ name: req.params.name });
        if (!data) return next(new HttpError(404, 'Distro Not Found.'));
        res.status(200).json(data);
    } catch(err) {
        next(new HttpError(500, 'Internal Server Error'));
    }
}

const getAllDistros = async (req, res, next) => {
    try {
        const data = await Distro.find();
        res.status(200).json(data);
    } catch (err) {
        next(new HttpError(500, 'Internal Server Error'));
    }
}

const postDistro = async (req, res, next) => {
    try {
        const distroExists = await Distro.findOne({ name: req.body.name });
        if (distroExists) return next(new HttpError(401, 'Distro Already Exists'));

        const data = await Distro.create({
            name: req.body.name,
            currentVersion: req.body.currentVersion,
            basedOn: req.body.basedOn,
            releaseModel: req.body.releaseModel,
            website: req.body.website
        });

        return res.status(201).json(data);
    } catch (err) {
        next(new HttpError(500, 'Internal Server Error'));
    }
}

const updateDistro = async (req, res, next) => {
    try {
        const data = await Distro.findOneAndUpdate({ name: req.params.name }, {
            name: req.body.name,
            currentVersion: req.body.currentVersion,
            basedOn: req.body.basedOn,
            releaseModel: req.body.releaseModel,
            website: req.body.website
        }, { new: true });

        res.status(201).json(data);
    } catch (err) {
        next(new HttpError(500, 'Internal Server Error'));
    }
}

const deleteDistro = async (req, res, next) => {
    try {
        const data = await Distro.deleteOne({ name: req.params.name });
        res.status(200).json({ deleted: data.deletedCount });
    } catch (err) {
        next(new HttpError(500, 'Internal Server Error'));
    }
}

module.exports = {
    getDistro,
    getAllDistros,
    postDistro,
    updateDistro,
    deleteDistro
}