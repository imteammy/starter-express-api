
const { ComboHero } = require('../../models')

exports.getAll = async (req, res, next) => {
    try {
        const r = await ComboHero.find()

        if (r.length === 0) {
            return res.json({ message: 'Hero Combo is empty.' })
        }
        return res.send(r)
    } catch (error) {
        return res.send(error.message)
    }
}

exports.getByID = async (req, res, next) => {
    const id = req.body.id
    
    try {
        const r = await ComboHero.find({ _id : id });
        if(!r) {
            return ({message : "Combo not found!"});
        }
        return res.json(r);
    } catch (error) {
        return res.send(error.message);
    }
}

exports.add = async (req, res, next) => {
    const ComboHeroData = req.body
    delete ComboHeroData.token;
    try {
        const result = await ComboHero.create(ComboHeroData)
        return res.json({ message: 'Created Hero combo success.', data: result })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

exports.update = async (req, res, next) => {
    try {
        const data = req.body;
        delete data.token;

        const filter = { _id: data.id };
        const update = Object.assign({}, data);
        const r = await ComboHero.findOneAndUpdate(filter, update, {
        new: true
        });

        if (!r) {
            return res.status(404).json({ message: 'Hero not found.' });
        };

        return res.json({
            message: 'Hero updated successfully.',
            data: r
        });
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

exports.delete = async (req, res, next) => {
    const { id } = req.body
    try {
        const r = await ComboHero.findOneAndDelete({ _id : id })
        if (!r) {
            return res.status(404).json({ message: 'Hero not found.' })
        }

        return res.json({ message: 'Hero deleted successfully.', data: r })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

