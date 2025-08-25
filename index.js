const {createTransaction} = require('./controllers/create');
const {syncDataBase} = require('./sync');
const express = require('express');

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

syncDataBase()
    .then(()=>{
        app.listen(3000, ()=>{
            console.log('API ON');
        })
    })

