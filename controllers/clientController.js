import clientService from '../services/clientService.js'

async function createClient(req, res, next) {
    try {
        let client = req.body
        if (!client.name || !client.cpf || !client.phone || !client.email || !client.address)
            throw new Error('Name, cpf, phone, email e address são obrigatórios')
        res.send(await clientService.createClient(client))
        logger.info(`POST /client - ${JSON.stringify(client)}`)
    } catch (err) {
        next(err)
    }
}

export default {
    createClient
}