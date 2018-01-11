const {Milk} = require('../models')

module.exports  = {

	async post (req, res) {
		try{
			const milk =  await Milk.create(req.body)
			res.send(milk.toJSON())
		}
		catch(err){
			console.log(err)
		res.status(500).send({
			error: 'Something went wrong while creating milk record'
		})
		} 
	},

	async show(req, res){
		try{
			
			const milk =  await Milk.findById(req.params.id,{
				where:{
					id:id
				}
			})
			res.send(milk)
		}
		catch(err){
			res.status(500).send({
			error: 'Something went wrong while getting  your milk record'
		})
	}
}
}