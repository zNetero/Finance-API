const { DataTypes } = require('sequelize');
const sequelize = require('../database')

const Transaction = sequelize.define("Transaction", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
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
}, {
    tableName: 'Transactions',
    timestamps: true
},
);

module.exports = Transaction;