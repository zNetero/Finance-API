const Transaction = require('../models/Transactions');

async function deleteTransaction(id){
    try{
        const transaction = await Transaction.findByPk(id);
        if(!transaction){
            throw new Error('Transaction not found');
        }
        await transaction.destroy();
        return transaction
    }catch(error){
        throw error
    }
}

module.exports = {deleteTransaction};