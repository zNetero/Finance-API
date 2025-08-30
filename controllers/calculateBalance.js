const Transaction = require('../models/Transactions');

async function calculateBalance(){
    try{
        const balance = await Transaction.sum('value', where({type: 'income'})) - await Transaction.sum('value', where({type: 'expense'}));
        return balance
    }catch(error){
        throw error
    }
}

module.exports = {calculateBalance};