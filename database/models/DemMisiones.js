module.exports = (sequelize, dataTypes) => {
    let alias = 'DemMisiones'; 
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
        tableName: 'dem_misiones',
        timestamps: false,
    };

    const DemMisiones = sequelize.define(alias, cols, config);

    return DemMisiones
}
