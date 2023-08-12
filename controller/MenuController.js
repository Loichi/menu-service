const Menu = require('../model/Menu');

// Creer un Menu
async function createMenu(req, res) {
  const { name, description, categories, price } = req.body;

  try {
    const newMenu = await Menu.create({
      name,
      description,
      categories,
      price
    });

    res.status(201).json(newMenu);
  } catch (err) {
    console.error('Erreur lors de la création du menu :', err);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la création du menu.' });
  }
}


// Obtenir tous les menus
async function getAllMenus(req, res) {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (err) {
    console.error('Erreur lors de la récupération des menus :', err);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des menus.' });
  }
}

// Obtenir un menu par son ID
async function getMenuById(req, res) {
  const menuId = req.params.id;

  try {
    const menu = await Menu.findById(menuId);
    if (!menu) {
      return res.status(404).json({ error: 'Menu non trouvé.' });
    }
    res.json(menu);
  } catch (err) {
    console.error('Erreur lors de la récupération du menu :', err);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération du menu.' });
  }
}

// Mettre à jour un menu par son ID
async function updateMenuById(req, res) {
  const menuId = req.params.id;
  const updatedMenuData = req.body;

  try {
    const updatedMenu = await Menu.findByIdAndUpdate(menuId, updatedMenuData, { new: true });
    if (!updatedMenu) {
      return res.status(404).json({ error: 'Menu non trouvé.' });
    }
    res.json(updatedMenu);
  } catch (err) {
    console.error('Erreur lors de la mise à jour du menu :', err);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la mise à jour du menu.' });
  }
}

// Supprimer un menu par son ID
async function deleteMenuById(req, res) {
  const menuId = req.params.id;

  try {
    const deletedMenu = await Menu.findByIdAndDelete(menuId);
    if (!deletedMenu) {
      return res.status(404).json({ error: 'Menu non trouvé.' });
    }
    res.json({ message: 'Menu supprimé avec succès.' });
  } catch (err) {
    console.error('Erreur lors de la suppression du menu :', err);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la suppression du menu.' });
  }
}

module.exports = {
  createMenu,
  getAllMenus,
  getMenuById,
  updateMenuById,
  deleteMenuById
};