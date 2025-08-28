const {createTransaction} = require('./controllers/create');
const {syncDataBase} = require('./sync');
const express = require('express');
const {readTransactions} = require('./controllers/read');
const {updateTransaction} = require('./controllers/update');


const app = express()
app.use(express.json());

app.post('/transactions', async(req,res) =>{
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

app.get('/transactions', async(req,res)=>{
    try{
        const transactions = await readTransactions();
        res.status(200).json(transactions)
    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }
})

app.put('/transactions/:id', async(req,res)=>{
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



syncDataBase()
    .then(()=>{
        app.listen(3000, ()=>{
            console.log('API ON');
        })
    })



