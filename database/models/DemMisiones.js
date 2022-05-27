module.exports = (sequelize, dataTypes) => {
    let alias = 'DemMisiones'; 
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
        tableName: 'dem_misiones',
        timestamps: false,
    };

    const DemMisiones = sequelize.define(alias, cols, config);

    return DemMisiones
}
