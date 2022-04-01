import productRepository from '../repositories/productRepository.js'

async function createProduct(product) {
    return await productRepository.insertProduct(product)
}

async function getProducts() {
    return await productRepository.getProducts()
}

async function getProduct(id) {
    return await productRepository.getProduct(id)
}

async function updateProduct(product) {
    return await productRepository.updateProduct(product)
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