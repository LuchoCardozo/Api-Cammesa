module.exports = (sequelize, dataTypes) => {
    let alias = 'DemChaco'; 
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        fecha: {
            type: dataTypes.DATE(),
            allowNull: false
        },

        demHoy: {
            type: dataTypes.BIGINT(10),
        },
        demAyer: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        demSemAnt: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
    };
    let config = {
        tableName: 'dem_chaco',
        timestamps: false,
    };

    const DemChaco = sequelize.define(alias, cols, config);

    return DemChaco
}
