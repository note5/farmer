
module.exports = (sequelize, DataTypes) => {
const Milk =sequelize.define('Milk', {
	dayPrice:{
		type: DataTypes.INTEGER,
		unique: true
	},

	amount: DataTypes.INTEGER 

})

 return Milk;
}
