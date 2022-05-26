module.exports = (sequelize, dataTypes) => {
    let alias = 'DemFormosa'; 
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
        tableName: 'dem_formosa',
        timestamps: false,
    };

    const DemFormosa = sequelize.define(alias, cols, config);

    return DemFormosa
}
