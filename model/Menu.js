const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

const menuCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  items: [menuItemSchema],
  price: {type: Number, required: false}
});

const menuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    categories: [menuCategorySchema],
    menu_price: { type: Number, required: true }
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
