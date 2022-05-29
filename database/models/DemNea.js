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
        },
        demSemanaAnt: {
            type: dataTypes.BIGINT(10),
        },
        demPrevista: {
            type: dataTypes.BIGINT(10),
        },
        tempHoy: {
            type: dataTypes.DOUBLE(10,2),
        },
        tempAyer: {
            type: dataTypes.DOUBLE(10,2),
        },
        tempSemanaAnt: {
            type: dataTypes.DOUBLE(10,2),
        }
    };
    let config = {
        tableName: 'dem_nea',
        timestamps: false,
    };

    const DemNea = sequelize.define(alias, cols, config);

    return DemNea
}
