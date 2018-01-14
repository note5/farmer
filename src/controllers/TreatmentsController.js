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
			
			const treatment =  await Treatments.findById(req.params.id)
			if(treatment){
				res.send(treatment.toJSON())
			}
			res.send({
				message:"the record you are looking for does not exist in the records"
			})
			res.send(treatment)
		}
		catch(err){
			res.status(500).send({
			error: 'Something went wrong while getting  your treatment record'
		})
	}
},
async edit (req, res) {
		try{
			const treatment =  await Treatments.update(req.body,{
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
			const treatment = await Treatments.destroy({
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
				error:'could not destroy the record'
			})
		} 
		
	}
}