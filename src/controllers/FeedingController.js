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
			
			const feed =  await Feeding.findById(req.params.id)
			res.send(feed)
		}
		catch(err){
			res.status(500).send({
			error: 'Something went wrong while getting  your feeding record'
		})
	}
}
,
async edit (req, res) {
		try{
			const feed =  await 	Feeding.update(req.body,{
				where:{
					id:req.params.id
				}
			})

			res.send({
				message:"Successfully updated the entry"
			})
		}
		catch(err){
			console.log(err)
		res.status(500).send({
			error: 'Something went wrong while updating vaccination record'
		})
		} 
	},
async remove (req, res){
		try{
			const feed = await Feeding.destroy({
			where:{
				id:req.params.id
			}
		})
			res.status(200).send({
				success:"record deleted!"
			})
		}
		catch(err){
			
			res.status(403).send({
				error:'Email already exists'
			})
		} 
		
	}
}