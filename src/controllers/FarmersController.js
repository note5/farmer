const{Farmer} =require('../models')
const {Cows} = require('../models')
const{Milk} = require('../models')
const{Reproduction} = require('../models')
const{Feeding} =require('../models')

module.exports  = {

	async post (req, res) {
		try{
			console.log('here')
			const farmer =  await Farmer.create(req.body)
			res.send(farmer.toJSON())
		}
		catch(err){
			console.log(err)
		res.status(500).send({
			error: 'Something went wrong while creating a farmer'
		})
		} 
	},

	async show(req, res){
		try{
			
			const farmer =  await Farmer.findById(req.params.id,{
			
			 	 include:[
			 	 	{
			 	 		model: Cows,
			 	 		include:{
			 	 			model: Milk,
			 	 			model:Reproduction,
			 	 			model:Feeding
			 	 		}
			 	 	}
			 	 ]
			 
			})
			
			if(!farmer){
			res.status(404).send({
				error: 'the cow you are looking seems to have been deleted',
				
			})
		}
		else{
			res.send(farmer)
		}

		}
		catch(err){
			console.log(err)
			res.status(500).send({
			error: 'Something went wrong while getting  your Cow record'
		})
	}
},
async edit (req, res) {
		try{
			const farmer =  await 	Farmer.update(req.body,{
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
async remove (req,res){
	try{

		
		const farmer = await Farmer.destroy({
			where:{
				id:req.params.id
			}
		})
		res.status(200).send({
				success:"record deleted!"
			})
		
		}

	catch(err){
			console.log(err)
			res.status(500).send({
			error: 'Something went wrong while deleting  farmer'
		})
	}
}
}