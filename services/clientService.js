import clientRepository from '../repositories/clientRepository.js'

async function createClient(client) {
    return await clientRepository.insertClient(client)
}

async function getClients() {
    return await clientRepository.getClients()
}

async function getClient(id) {
    return await clientRepository.getClient(id)
}

async function updateClient() {

}

async function deleteClient(id) {
    return await clientRepository.deleteClient(id)
}

export default {
    createClient,
    getClients,
    getClient,
    updateClient,
    deleteClient,
}