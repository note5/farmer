module.exports = (sequelize, DataTypes) => {
const Feeding =sequelize.define('Feeding', {
	
	cow: DataTypes.STRING,
	feed:DataTypes.STRING,
	amount: DataTypes.INTEGER,
	date:DataTypes.DATEONLY,
	cost:DataTypes.INTEGER

})

 return Feeding
}