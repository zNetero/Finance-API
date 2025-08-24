const { DataTypes } = require('sequelize');
const sequelize = require('../database')

const Transaction = sequelize.define("Transaction",{
    type: {
        type: DataTypes.ENUM('entry', 'exit'),
        allowNull: false
    },
    value: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Transaction;