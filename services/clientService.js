import clientRepository from '../repositories/clientRepository.js'

async function createClient(client) {
    return await clientRepository.insertClient(client)
}

export default {
    createClient
}