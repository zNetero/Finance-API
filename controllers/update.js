const Transactions = require('../models/Transactions');

async function updateTransaction(id, type, value, data, description) {
    try{
        const transaction = await Transactions.findByPk(id);
        if(!transaction){
            throw new Error('Transaction not found');
        }
        transaction.type = type;
        transaction.value = value;
        transaction.data = data;
        transaction.description = description;
        await transaction.save();
        return transaction;
    }catch(error){
        throw error
    }
}

module.exports = {updateTransaction};