const Transactions = require('../models/Transactions');

async function readTransactions() {
    try{
        const allTransactions = await Transactions.findAll({});
        return allTransactions
    } catch(error){
        throw error
    }
}

module.exports = {readTransactions};