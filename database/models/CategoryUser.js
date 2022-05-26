
module.exports = (sequelize, dataTypes) => {
    let alias = 'CategoryUser'; // esto debería estar en singular  
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
            tableName: 'users_categories',
            timestamps: false,
        }
      
     const CategoryUser = sequelize.define(alias,cols,config);
    
    //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)
    
    CategoryUser.associate = function (models) {
        CategoryUser.hasMany(models.User, { 
                as: "categoriesUsers",
                foreignKey: "category_id"
            })
        }
    
        return CategoryUser
    }