const {Vaccinations} = require('../models')

module.exports  = {

	async post (req, res) {
		try{
			const treatment =  await Vaccinations.create(req.body)
			res.send(treatment.toJSON())
		}
		catch(err){
			console.log(err)
		res.status(500).send({
			error: 'Something went wrong while creating vaccination record'
		})
		} 
	},

	async show(req, res){
		try{
			
			const treatment =  await Vaccinations.findById(req.params.id,{
				where:{
					id:id
				}
			})
			res.send(feed)
		}
		catch(err){
			res.status(500).send({
			error: 'Something went wrong while getting  your vaccination record'
		})
	}
}
}