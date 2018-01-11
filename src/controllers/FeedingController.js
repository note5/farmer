const {Feeding} = require('../models')

module.exports  = {

	async post (req, res) {
		try{
			const feed =  await Feeding.create(req.body)
			res.send(feed.toJSON())
		}
		catch(err){
			console.log(err)
		res.status(500).send({
			error: 'Something went wrong while creating feeding record'
		})
		} 
	},

	async show(req, res){
		try{
			
			const feed =  await Feeding.findById(req.params.id,{
				where:{
					id:id
				}
			})
			res.send(feed)
		}
		catch(err){
			res.status(500).send({
			error: 'Something went wrong while getting  your feeding record'
		})
	}
}
}