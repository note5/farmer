module.exports = (sequelize, DataTypes) => {
const Vaccinations =sequelize.define('Vaccinations', {
	
	disease:DataTypes.STRING,
	date:DataTypes.DATEONLY,
	cow_name:DataTypes.STRING,
	vet_name:DataTypes.STRING,
	drug:DataTypes.STRING
	
})

 return Vaccinations
}
