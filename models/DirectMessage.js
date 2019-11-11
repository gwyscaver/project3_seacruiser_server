module.exports = function(sequelize, DataTypes) {
    var DirectMessage = sequelize.define('DirectMessage', {

        message: DataTypes.STRING,        
        
    });

    DirectMessage.associate = function(models) {
        // add associations here
        DirectMessage.belongsTo(models.User);
        DirectMessage.belongsTo(models.PersonalTopic)
        
    };

    

    return DirectMessage;
};