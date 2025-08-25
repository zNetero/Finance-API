const Transaction = require('../models/Transactions');

async function createTransaction(type,value,data,description){
    try{await Transaction.create({type,value,data,description});
    console.log('Transaction created successfully');
    }catch(error){
        console.error('Error creating transaction:', error);
    }
}

module.exports = {createTransaction};