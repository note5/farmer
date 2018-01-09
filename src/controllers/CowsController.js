const {Cows} = require('../models')
const{Milk} = require('../models')
const{Farmer} =require('../models')
const{Reproduction} = require('../models')
const{Feeding} =require('../models')


module.exports  = {

	async post (req, res) {
		try{
			
			console.log(req.body)
			const cow =  await Cows.create(req.body)
			res.send(cow.toJSON())
		}
		catch(err){
			console.log(err)
		res.status(500).send({
			error: 'Something went wrong while creating a Cow record'
		})
		} 
	},

	async show(req, res){
		try{
			
			const cow =  await Cows.findById(req.params.id,{
			  
			   forEach(cow){
			   	include:[
			 	 	{
			 	 		model: Milk
			 	 	}
			 	 ]

			   },
			 	 
			 	 include:[
			 	 	{
			 	 		model: Reproduction
			 	 	}
			 	 ]
			 
			})
			
			if(!cow){
			res.status(404).send({
				error: 'the cow you are looking seems to have been deleted',
				
			})
		}
		else{
			res.send(cow)
		}

		}
		catch(err){
			console.log(err)
			res.status(500).send({
			error: 'Something went wrong while getting  your Cow record'
		})
	}
},
async remove (req,res){
	try{

		
		const cow = await Cows.destroy({
			where:{
				id:req.params.CowId
			}
		})
		
		}

	catch(err){
			console.log(err)
			res.status(500).send({
			error: 'Something went wrong while deleting  your Cow record'
		})
	}
}
}