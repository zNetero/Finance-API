const {createTransaction} = require('./controllers/create');
const {syncDataBase} = require('./sync');
const express = require('express');
const {readTransactions} = require('./controllers/read');
const {updateTransaction} = require('./controllers/update');
const {deleteTransaction} = require('./controllers/delete');
const {calculateBalance} = require('./controllers/calculateBalance');


const app = express()
app.use(express.json());

app.post('/transaction', async(req,res) =>{
    try{
        const transaction = await createTransaction(req.body.type, 
            req.body.value, 
            req.body.data, 
            req.body.description);
            
            
            res.status(201).json({
                message: 'Transaction created successfully',
                transaction
            })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

app.get('/transaction', async(req,res)=>{
    try{
        const transactions = await readTransactions();
        res.status(200).json(transactions)
    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }
})

app.put('/transaction/:id', async(req,res)=>{
    try{
        const transaction = await updateTransaction(req.params.id,
            req.body.type,
            req.body.value,
            req.body.data,
            req.body.description);
            res.status(200).json({
                message: 'Transaction updated successfully',
                transaction
            })
    }
    catch(error){
        res.status(500).json({
            error: error.message
        })
    }
})


app.delete('/transaction/:id', async(req,res)=>{
    try{
        const transaction = await deleteTransaction(req.params.id);
        res.status(200).json({
            message: 'Transaction deleted sucessfully',
            transaction
        })
    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }
})

app.get('/transaction/balance',async(req,res)=>{
    try{
        const balance = await calculateBalance();
        res.status(200).json({
            balance
        })
    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }
})


syncDataBase()
    .then(()=>{
        app.listen(3000, ()=>{
            console.log('API ON');
        })
    })



