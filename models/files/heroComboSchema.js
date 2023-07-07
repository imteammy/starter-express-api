const mongoose = require('mongoose');

exports.heroComboSchema = new mongoose.Schema({
    comboName: { type: String, default: "null" },
    comboImage: { type: String, default: "null" },
    heroCombo: {
      one: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
      two: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
      three: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
      four: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
      five: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
    },
    comboLost: {
      one: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
      two: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
      three: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
      four: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
      five: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
    },
    itemsSolution: {
      one: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
      two: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
      three: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
      four: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
      five: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
    },
    comboWin: {
      one: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
      two: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
      three: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
      four: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
      five: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
    },
  });