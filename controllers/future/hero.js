const express = require('express');
const { Hero } = require('../../models')

exports.getAllHeroes = async (req, res, next) => {
    try {
        const hero = await Hero.find()

        if (hero.length === 0) {
            return ({ message: 'Heroes is empty.' })
        }

        return hero
    } catch (error) {
        return error.message
    }
}

exports.findhero = async (req, res, next) => {
    const id = req.body.id

    if(!id || id == "") {
        return res.send({message : "name is required"}); 
    }
    try {
        const hero = await Hero.findOne({ _id : id });
        if(!hero) {
            return res.send({message : "Hero not found!"});
        }
        return res.send(hero);
    } catch (error) {
        return res.send(error.message);
    }
}

exports.add = async (req, res, next) => {
    const HeroData = req.body
    
    delete HeroData.token;
    try {
        const result = await Hero.create(HeroData)
        return res.json({ message: 'Created new hero successfully.', data: result })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}
exports.addMany = async (req, res, next) => {
    const d = req.body;
    delete d.token;
    
    const result = d.map(obj => {
        const { token, ...rest } = obj;
        return rest;
      });
    
    try {
      const r = await Hero.insertMany(result);
      return res.json({ message: 'Created new hero successfully.', data: r });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
}
exports.update = async (req, res, next) => {
    try {
        const data = req.body;
        delete data.token;

        const filter = { _id: data.id };
        const update = Object.assign({}, data);
        const updateResult = await Hero.findOneAndUpdate(filter, update, {
        new: true
        });

        if (!updateResult) {
            return res.status(404).json({ message: 'Hero not found.' });
        };

        return res.json({
            message: 'Hero updated successfully.',
            data: updateResult
        });
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

exports.delete = async (req, res, next) => {
    const { id } = req.body;
    try {
        const deleteHero = await Hero.findOneAndDelete({ _id: id })
        if (!deleteHero) {
            return res.status(404).json({ message: 'Hero not found.' })
        }

        return res.json({ message: 'Hero deleted successfully.', data: deleteHero })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}