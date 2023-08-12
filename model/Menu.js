const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

const menuCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    items: [menuItemSchema]
});

const menuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    categories: [menuCategorySchema],
    price: { type: Number, required: true }
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
