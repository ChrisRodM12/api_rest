const { DataTypes } = require('sequelize');

function defineEvent( sequelize ) {
    sequelize.define('event', {
        //Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        event_name: {
            type: DataTypes.STRING
        },
        event_lastname: {
            type: DataTypes.STRING
        },
        event_division: {
            type: DataTypes.STRING
        },
        event_style: {
            type: DataTypes.STRING
        },
        event_localization: {
            type: DataTypes.STRING
        },
    }, {
        //Other model options go here
        timestamps: false
    });
}

module.exports = defineEvent;