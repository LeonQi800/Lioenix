'use strict';
 
module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;
 
    const User = app.model.define('user',
        {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true , allowNull: false},
            name: STRING,
            gender: INTEGER,
            email: STRING,
        },
        {
            freezeTableName: true, // Model 对应的表名将与model名相同
            timestamps: false,
            tableName: 'HULK_USERS'
        }
    );
 
    return User;
};