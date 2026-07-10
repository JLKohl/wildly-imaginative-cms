const express = require('express');
const Character = require('../models/character');

const router = express.Router();

// Get all characters
router.get('/', async (req, res) => {
    try {
        const characters = await Character.find();
        res.json(characters);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a character by ID
router.get('/:id', async (req, res) => {
    try {
        const character = await Character.findById(req.params.id);
        if (!character) return res.status(404).json({ message: 'Character not found' });
        res.json(character);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new character
router.post('/', async (req, res) => {
    const character = new Character({
      name: req.body.name,
      age: req.body.age,
      eyeColor: req.body.eyeColor,
      hairColor: req.body.hairColor,
      occupation: req.body.occupation,
      imageUrl: req.body.imageUrl,
      description: req.body.description
    });
  
    try {
      const newCharacter = await character.save();
      res.status(201).json(newCharacter);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

//Update a character
router.put('/:id', async (req, res) => {
    try {
        const updatedCharacter = await Character.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedCharacter) {
            return res.status(404).json({ message: 'Character not found' });
        }

        res.json(updatedCharacter);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a character
router.delete('/:id', async (req, res) => {
    try {
        const character = await Character.findByIdAndDelete(req.params.id);
        if (!character) return res.status(404).json({ message: 'Character not found' });
        res.json({ message: 'Character deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;