import saleService from '../services/saleService.js'

async function createSale(req, res, next) {
    try {
        const sale = req.body
        if (!sale.value || !sale.date || !sale.client_id || !sale.productId) {
            throw new Error('Value, date, client_id e product_id são obrigatórios')
        }
        res.send(await saleService.createSale(sale))
        logger.info(`POST /sale - ${JSON.stringify(sale)}`)
    } catch (err) {
        next(err)
    }
}

async function getSales(req, res, next) {
    try {
        res.send(await saleService.getSales(req.query.productId, req.query.supplierId))
        logger.info('GET /sale')
    } catch (err) {
        next(err)
    }
}

async function getSale(req, res, next) {
    try {
        res.send(await saleService.getSale(req.params.id))
        logger.info('GET /sale :id')
    } catch (err) {
        next(err)
    }
}

async function updateSale(req, res, next) {
    try {
        let sale = req.body
        if (!sale.saleId || !sale.value || !sale.date || !sale.clientId || !sale.productId) {
            throw new Error('Sale_id, value, date, client_id e product_id são obrigatórios')
        }
        sale = await saleService.updateSale(sale)
        res.send(sale)
        logger.info(`PUT /sale - ${JSON.stringify(sale)}`)
    } catch (err) {
        next(err)
    }
}

async function deleteSale(req, res, next) {
    try {
        await saleService.deleteSale(req.params.id)
        res.end()
        logger.info('DELETE /sale :id')
    } catch (err) {
        next(err)
    }
}

export default {
    createSale,
    getSales,
    getSale,
    updateSale,
    deleteSale
}