module.exports = (sequelize, DataTypes) => {
const Reproduction =sequelize.define('Reproduction', {
	
	cowName:DataTypes.STRING,
	ear_tag_no:DataTypes.INTEGER,
	AI_date:DataTypes.DATEONLY,

	last_calf:{

		type: DataTypes.ENUM,
      values: ['Bull', 'Heilfer', 'Twin','Aborted','Not Known']
  },

	bull: DataTypes.STRING,
	breed:DataTypes.STRING,
	sire: DataTypes.STRING,
	VetName: DataTypes.STRING,
	VetCode: DataTypes.INTEGER,
	straw_img:DataTypes.STRING,
	leaflet_img:DataTypes.STRING,
	Last_Calving_date:DataTypes.DATEONLY



})

 return Reproduction

}