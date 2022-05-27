module.exports = (sequelize, dataTypes) => {
    let alias = 'DemChaco'; 
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
        tableName: 'dem_chaco',
        timestamps: false,
    };

    const DemChaco = sequelize.define(alias, cols, config);

    return DemChaco
}
