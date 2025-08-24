const sequelize = require('./database');

async function syncDataBase(){
    try{
        await sequelize.sync();
        console.log('Database synced');
    } catch (error){
        console.error('Error syncing database:', error);
    }
}

module.exports = syncDataBase;