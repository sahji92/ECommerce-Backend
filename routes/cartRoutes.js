const express = require('express')
const { addToCart, getCartProducts, deleteCartProduct } = require('../controllers/cartController')

const router = express.Router()

router.post('/add-to-cart',addToCart)

router.get('/fetch-cart/:customerId',getCartProducts)

router.post('/remove-from-cart',deleteCartProduct)


module.exports = router