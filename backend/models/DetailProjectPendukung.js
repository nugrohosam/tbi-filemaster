const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class DetailProjectPendukung extends Model {}

DetailProjectPendukung.init({
    id_project_pendukung: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_project: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'project',
            key: 'id_project',
        },
    },
    file: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    pekerjaan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    deletedAt: {
        type: DataTypes.DATE,
    },
}, {
    sequelize,
    modelName: 'DetailProjectPendukung',
    tableName: 'detail_project_pendukung',
    timestamps: true,
    paranoid: true,
});

module.exports = DetailProjectPendukung;
