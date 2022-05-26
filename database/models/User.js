module.exports = (sequelize, dataTypes) => {
    let alias = 'User'; // esto debería estar en singular  
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        legajo: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        management_id: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(250),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(250),
            allowNull: false
        },
        adress: {
            type: dataTypes.STRING(250),
            allowNull: false
        },
        category_id: dataTypes.BIGINT(10),
    };
    let config = {
        tableName: 'users',
        timestamps: true,
        createdAt: true,
        updatedAt: true,
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.belongsTo(models.ManagementUser, {
            as: "usersManagement",
            foreignKey: "management_id"
        }),
            User.belongsTo(models.CategoryUser, {
                as: "usersCategory",
                foreignKey: "category_id"
            })
    }

    return User
}
