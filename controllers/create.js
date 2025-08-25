const Transaction = require('../models/Transactions');

async function createTransaction(type, value, data, description) {
    try {
        const transaction = await Transaction.create({ type, value, data, description });
        return transaction
    } catch (error) {
        throw error
    }
}

module.exports = { createTransaction };