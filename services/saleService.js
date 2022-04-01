import saleRepository from '../repositories/saleRepository.js'
import clientRepository from '../repositories/clientRepository.js'
import productRepository from '../repositories/productRepository.js'

async function createSale(sale) {
    if (!await clientRepository.getClient(sale.client_id)) {
        throw new Error('O client_id informado não existe')
    }
    if (!await productRepository.getProduct(sale.product_id)) {
        throw new Error('O product_id informado não existe')
    }
    return await saleRepository.insertSale(sale)
}

async function getSales() {
    return await saleRepository.getSales()
}

async function getSale(id) {
    return await saleRepository.getSale(id)
}

async function updateSale(sale) {
    if (!await clientRepository.getClient(sale.client_id)) {
        throw new Error('O client_id informado não existe')
    }
    if (!await productRepository.getProduct(sale.product_id)) {
        throw new Error('O product_id informado não existe')
    }
    return await saleRepository.updateSale(sale)
}

async function deleteSale(id) {
    return await saleRepository.deleteSale(id)
}

export default {
    createSale,
    getSales,
    getSale,
    updateSale,
    deleteSale,
}