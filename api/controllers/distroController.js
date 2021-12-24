const Distro = require('../models/Distro.js');

const addDistro = async (req, res) => {
    try {
        const distroExists = await Distro.findOne({ name: req.body.name });

        if (!distroExists) {
            const newDistro = await Distro.create({
                name: req.body.name,
                currentVersion: req.body.currentVersion,
                basedOn: req.body.basedOn,
                releaseModel: req.body.releaseModel,
                website: req.body.website
            });

            return res.status(201).json(newDistro);
        };

        res.status(400).json(`${req.body.name} already exists`);
    } catch(err) {
        res.status(500).json({
            error: true,
            message: 'Internal server error, try again later.'
        });
    };
};

const getAllDistros = async (req, res) => {
    try {
        const allDistros = await Distro.find();
        res.status(200).json(allDistros);
    } catch(err) {
        res.status(500).json({
            error: true,
            message: 'Internal server error, try again later.'
        });
    };
};

const getDistroByName = async (req, res) => {
    try {
        const results = await Distro.find({ name: req.params.name });
        if (results.length === 0) {
            return res.status(404).json(`Distro with name of ${req.params.name} not found`);
        };

        res.status(200).json(results);
    } catch(err) {
        res.status(500).json({
            error: true,
            message: 'Internal server error try again later.'
        });
    };
};

const editDistroInfo = async (req, res) => {
    try {
        const updatedDistro = await Distro.findOneAndUpdate({ name: req.params.name }, {
            name: req.body.name,
            currentVersion: req.body.currentVersion,
            basedOn: req.body.basedOn,
            releaseModel: req.body.releaseModel,
            website: req.body.website
        }, { new: true });

        res.status(201).json(updatedDistro);
    } catch(err) {
        res.status(500).json({
            error: true,
            message: 'Internal server error, try again later.'
        });
    };
};

const deleteDistro = async (req, res) => {
    try {
        const result = await Distro.deleteOne({ name: req.params.name });
        res.status(200).json({ deleted: result.deletedCount });
    } catch(err) {
        res.status(500).json({
            error: true,
            message: 'Internal server error, try again later.'
        });
    }
};

module.exports = {
    addDistro,
    getAllDistros,
    getDistroByName,
    editDistroInfo,
    deleteDistro
}