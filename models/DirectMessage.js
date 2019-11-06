module.exports = function(sequelize, DataTypes) {
    var DirectMessage = sequelize.define('DirectMessage', {
        message: {
            type:DataTypes.STRING
        }
        
        
    });

    DirectMessage.associate = function(models) {
        // add associations here
        DirectMessage.belongsTo(models.User);
        DirectMessage.belongsToMany(models.PersonalTopic, {through: "TopicMessage"})
        
    };

    

    return DirectMessage;
};