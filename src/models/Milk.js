
module.exports = (sequelize, DataTypes) => {
const Milk =sequelize.define('Milk', {

	dayPrice: DataTypes.INTEGER,
	
	amount: DataTypes.INTEGER,

	date: DataTypes.DATEONLY,

	cow_name:DataTypes.STRING


})

 return Milk
}
