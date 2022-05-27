module.exports = (sequelize, dataTypes) => {
    let alias = 'DemNea'; 
    let cols = {
        fecha: {
            type: dataTypes.DATE(),
            primaryKey: true,
            allowNull: false
        },
        demHoy: {
            type: dataTypes.BIGINT(10),
        },
        demAyer: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        demSemanaAnt: {
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
        tempSemanaAnt: {
            type: dataTypes.DOUBLE(10,2),
            allowNull: false
        }
    };
    let config = {
        tableName: 'dem_nea',
        timestamps: false,
    };

    const DemNea = sequelize.define(alias, cols, config);

    return DemNea
}
