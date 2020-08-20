
const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');

router.post('/', productsController.createProduct);
router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;