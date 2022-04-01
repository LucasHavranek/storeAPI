import express from 'express'
import productController from '../controllers/productController.js'

const router = express.Router()
router.post('/', productController.createProduct)
router.get('/', productController.getProducts)
router.get('/:id', productController.getProduct)
router.put('/', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)


export default router