module.exports = function(sequelize, DataTypes) {
    var PersonalTopic = sequelize.define('PersonalTopic', {
        messages: DataTypes.STRING  
        
        
    });

    PersonalTopic.associate = function(models) {
        // add associations here
        PersonalTopic.belongsToMany(models.User, {through:"TopicUsers"});
        
        PersonalTopic.belongsToMany(models.DirectMessage,{through:"TopicMessage"});

    };

    

    return PersonalTopic;
};