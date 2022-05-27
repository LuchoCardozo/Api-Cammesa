module.exports = (sequelize, dataTypes) => {
    let alias = 'ManagementUser'; // esto debería estar en singular  
    let cols = {
            id: {
                type: dataTypes.BIGINT(10).UNSIGNED,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                type: dataTypes.STRING(100),
                allowNull: false
            }
        };
        let config = {
            tableName: 'users_managements',
            timestamps: false,
        };
     const ManagementUser = sequelize.define(alias,cols,config);
    
     ManagementUser.associate = function (models) {
        ManagementUser.hasMany(models.User, { 
                as: "managementsUsers",
                foreignKey: "management_id"
            })     
            }
        return ManagementUser
    }