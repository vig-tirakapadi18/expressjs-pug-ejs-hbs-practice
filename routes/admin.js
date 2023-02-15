const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/add-prod', productsController.getAddProduct);

router.post('/add-prod', productsController.postAddProduct);

module.exports = router;