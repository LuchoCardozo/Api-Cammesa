module.exports = (sequelize, dataTypes) => {
    let alias = 'DemNea'; 
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

        tempHoy: {
            type: dataTypes.DOUBLE(10,2),
            allowNull: false
        },
        tempAyer: {
            type: dataTypes.DOUBLE(10,2),
            allowNull: false
        },
        tempSemAnt: {
            type: dataTypes.DOUBLE(10,2),
            allowNull: false
        },
    };
    let config = {
        tableName: 'dem_nea',
        timestamps: false,
    };

    const DemNea = sequelize.define(alias, cols, config);

    return DemNea
}
