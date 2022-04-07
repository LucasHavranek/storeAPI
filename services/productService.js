import productRepository from '../repositories/productRepository.js'
import supplierRepository from '../repositories/supplierRepository.js'
import saleRepository from '../repositories/saleRepository.js'

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
    if (await supplierRepository.getSupplier(product.supplierId)) {
        return await productRepository.updateProduct(product)
    }
    throw new Error("O supplier_id informado não existe")
}

async function deleteProduct(id) {
    const sales = await saleRepository.getSalesByProductId(id)
    if (sales) {
        throw new Error('Não é possível excluir o produto pois possui vendas.')
    } else {
        await productRepository.deleteProduct(id)
    }

}

export default {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
}