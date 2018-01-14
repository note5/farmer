const {Reproduction} = require('../models')

module.exports  = {

	// create AI record
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
//get Specific AI record
	async show(req, res){
		try{
			
			const insemination =  await Reproduction.findById(req.params.id)
			if(!insemination){
				res.send({
					message:"the record is missing"
				})
			}
			res.send(insemination)
		}
		catch(err){
			res.status(500).send({
			error: 'Something went wrong while getting  your AI record'
		})
	}
},
async edit (req, res) {
		try{
			const insemination =  await 	Reproduction.update(req.body,{
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
			const insemination = await Reproduction.destroy({
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