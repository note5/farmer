const {Reproduction} = require('../models')

module.exports  = {

	async post (req, res) {
		try{
			const insemination =  await Reproduction.create(req.body)
			res.send(insemination.toJSON())
		}
		catch(err){
			console.log(err)
		res.status(500).send({
			error: 'Something went wrong while creating AI record'
		})
		} 
	},

	async index(req, res){
		try{
			
			const insemination =  await Reproduction.findById(req.params.id,{
				where:{
					id:id
				}
			})
			res.send(cow)
		}
		catch(err){
			res.status(500).send({
			error: 'Something went wrong while getting  your AI record'
		})
	}
}
}