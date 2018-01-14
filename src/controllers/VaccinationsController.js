const {Vaccinations} = require('../models')

module.exports  = {

	async post (req, res) {
		try{
			const vaccination =  await Vaccinations.create(req.body)
			res.send(vaccination.toJSON())
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
			
			const vaccination =  await Vaccinations.findById(req.params.id)
			if(vaccination){
				res.send(vaccination.toJSON())
			}
			res.send({
				message:"the record does not exist in the records"
			})
			res.send(vaccination)
		}
		catch(err){
			console.log(err)
			res.status(500).send({
			error: 'Something went wrong while getting  your vaccination record'
		})
	}
},

async edit (req, res) {
		try{
			const vaccination =  await 	Vaccinations.update(req.body,{
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
			const vaccination = await Vaccinations.destroy({
			where:{
				id:req.params.id
			}
		})
			res.status(200).send({
				success:`record ${req.params.id} deleted!`
			})
		}
		catch(err){
			
			res.status(403).send({
				error:'Email already exists'
			})
		} 
		
	}
}