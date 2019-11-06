module.exports = function(sequelize, DataTypes) {
    var GeneralTopic = sequelize.define('GeneralTopic', {

        message: DataTypes.STRING,  

        user: DataTypes.STRING,
        
        topic: DataTypes.STRING
        
        
    });

    

    return GeneralTopic;
};