module.exports = (sequelize, DataTypes) => {
  const Cows = sequelize.define('Cows', {
   name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    breed:{
      type:DataTypes.STRING,
      allowNull:false
    },
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
    })

}



  return Cows

}