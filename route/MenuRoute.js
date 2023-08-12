const express = require('express');
const router = express.Router();
const MenuController = require('../controller/MenuController');


//GET
router.get('/', MenuController.getAllMenus);
router.get('/:id', MenuController.getMenuById);

// //CREATE
router.post('/', MenuController.createMenu);

// //DELETE
router.delete('/:id', MenuController.deleteMenuById);


// //UPDATE
router.put('/:id', MenuController.updateMenuById);


module.exports = router;