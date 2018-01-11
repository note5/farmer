const {Treatments} = require('../models')

module.exports  = {

	async post (req, res) {
		try{
			const treatment =  await Treatments.create(req.body)
			res.send(treatment.toJSON())
		}
		catch(err){
			console.log(err)
		res.status(500).send({
			error: 'Something went wrong while creating treatment record'
		})
		} 
	},

	async show(req, res){
		try{
			
			const treatment =  await Treatments.findById(req.params.id,{
				where:{
					id:id
				}
			})
			res.send(feed)
		}
		catch(err){
			res.status(500).send({
			error: 'Something went wrong while getting  your treatment record'
		})
	}
}
}