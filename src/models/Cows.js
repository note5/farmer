module.exports = (sequelize, DataTypes) => {
  const Cows = sequelize.define('Cows', {

    name:DataTypes.STRING,
      
    breed:DataTypes.STRING,
    
    age:DataTypes.INTEGER,

    weight:DataTypes.INTEGER,

    state:{

    type: DataTypes.ENUM,

      values: ['Dry','Lactating']
  },

  image_path:DataTypes.STRING


  })

  Cows.associate = function(models) {
    
    Cows.hasMany(models.Milk,{
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
}
    }),

    Cows.hasMany(models.Reproduction,{
        onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
}
    }),

    Cows.hasMany(models.Feeding,{
        onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
}
    }),

     Cows.hasMany(models.Treatments,{
        onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
}
    }),

      Cows.hasMany(models.Vaccinations,{
        onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
}
    })



}



  return Cows

}