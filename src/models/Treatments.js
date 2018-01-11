module.exports = (sequelize, DataTypes) => {
const Treatments =sequelize.define('Treatments', {
	
	cow_name:DataTypes.STRING,
	disease:DataTypes.STRING,
	treatment:DataTypes.STRING,
	vet_name:DataTypes.STRING,
	date:DataTypes.DATEONLY,

})

 return Treatments
}