const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Project extends Model {}

Project.init({
    id_project: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama_project: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kategori: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    deskripsi: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    nama_pengaju_project: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    jabatan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    instansi: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    no_telp: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    alamat: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    provinsi: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kabupaten: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kecamatan_desa: {
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
    modelName: 'Project',
    tableName: 'project',
    timestamps: true,
    paranoid: true,
});

module.exports = Project;
