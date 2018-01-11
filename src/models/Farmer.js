module.exports = (sequelize, DataTypes) => {
  const Farmer = sequelize.define('Farmer', {

   name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    farm_no:{
      type:DataTypes.INTEGER,
      allowNull:true
    },

    sublocation: DataTypes.STRING,

    county:DataTypes.STRING,

    phone:DataTypes.STRING
    
  })

  Farmer.associate = function(models) {
    Farmer.hasMany(models.Cows, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
}
    });
}



  return Farmer

}