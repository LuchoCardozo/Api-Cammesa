module.exports = (sequelize, dataTypes) => {
    let alias = 'DemFormosa'; 
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
        }
    };
    let config = {
        tableName: 'dem_formosa',
        timestamps: false,
    };

    const DemFormosa = sequelize.define(alias, cols, config);

    return DemFormosa
}
