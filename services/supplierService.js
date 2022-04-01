import supplierRepository from '../repositories/supplierRepository.js'

async function createSupplier(supplier) {
    return await supplierRepository.insertSupplier(supplier)
}

async function getSuppliers() {
    return await supplierRepository.getSuppliers()
}

async function getSupplier(id) {
    return await supplierRepository.getSupplier(id)
}

async function updateSupplier(supplier) {
    return await supplierRepository.updateSupplier(supplier)
}

async function deleteSupplier(id) {
    return await supplierRepository.deleteSupplier(id)
}

export default {
    createSupplier,
    getSuppliers,
    getSupplier,
    updateSupplier,
    deleteSupplier,
}