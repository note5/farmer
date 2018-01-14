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
			
			const milk =  await Milk.findById(req.params.id)
			if(milk){
				res.send(milk)
			}
			else{
				res.status(404).send({
					message:`the item with id ${req.params.id} not found`
				})
			}
			
		}
		catch(err){
			res.status(500).send({
			error: 'Something went wrong while getting  your milk record'
		})
	}
},
async edit (req, res) {
		try{
			const milk =  await 	Milk.update(req.body,{
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
			const milk = await Milk.destroy({
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