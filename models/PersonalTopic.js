module.exports = function(sequelize, DataTypes) {
    var PersonalTopic = sequelize.define('PersonalTopic', {
        id1: DataTypes.STRING,
        id2: DataTypes.STRING,
        name1: DataTypes.STRING,
        name2: DataTypes.STRING
        
    });

    PersonalTopic.associate = function(models) {
        // add associations here
        PersonalTopic.belongsToMany(models.User, {through:"TopicUsers"});
        
        PersonalTopic.belongsToMany(models.DirectMessage,{through:"TopicMessage"});

    };

    

    return PersonalTopic;
};