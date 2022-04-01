import productRepository from '../repositories/productRepository.js'
import supplierRepository from '../repositories/supplierRepository.js'

async function createProduct(product) {
    if (await supplierRepository.getSupplier(product.supplier_id)) {
        return await productRepository.insertProduct(product)
    }
    throw new Error("O supplier_id informado não existe")
}

async function getProducts() {
    return await productRepository.getProducts()
}

async function getProduct(id) {
    return await productRepository.getProduct(id)
}

async function updateProduct(product) {
    if (await supplierRepository.getSupplier(product.supplier_id)) {
        return await productRepository.updateProduct(product)
    }
    throw new Error("O supplier_id informado não existe")
}

async function deleteProduct(id) {
    return await productRepository.deleteProduct(id)
}

export default {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
}