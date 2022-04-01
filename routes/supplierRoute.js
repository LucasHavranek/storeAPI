import express from 'express'
import supplierController from '../controllers/supplierController.js'

const router = express.Router()
router.post('/', supplierController.createSupplier)
router.get('/', supplierController.getSuppliers)
router.get('/:id', supplierController.getSupplier)
router.put('/', supplierController.updateSupplier)
router.delete('/:id', supplierController.deleteSupplier)


export default router