const {Cows} = require('../models')
const{Milk} = require('../models')
const{Farmer} =require('../models')
const{Reproduction} = require('../models')
const{Feeding} =require('../models') 
const{Treatments} =require('../models') 
const{Vaccinations} =require('../models') 

module.exports  = {

	async post (req, res) {
		try{
			
			console.log(req.body)
			const cow =  await Cows.create(req.body)
			
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
			  
			  
			 	 include:[
			 	 	{
			 	 		model: Reproduction
			 	 	},

			 	 	{
			 	 		model:Milk
			 	 	},
			 	 	{
			 	 		model:Feeding
			 	 	},
			 	 	{
			 	 		model: Treatments

			 	 	},
			 	 	{
			 	 		model:Vaccinations
			 	 	}
			 	 ]
			 
			})
			
			if(!cow){
			res.status(404).send({
				error: 'the cow you are looking seems to have been deleted',
				
			})
		}
		else{
			//res.send(cow)
			
			let i 
			let total_price=[]
			let total

			cowss= JSON.parse(JSON.stringify(cow))
			//cowss= Object.assign({}, cow)
			for(i in cowss.Milk){
				let price = cowss.Milk[i].dayPrice * cowss.Milk[i].amount
				//prices[`day ${parseInt(i)+1}`] = price
				cowss.Milk[i].totals = price

				total_price.push(price)
				
			}
            
             //Add milk prices for each day
			total = total_price.reduce(function(acc, val)
			 { 
			 	return acc + val
			 })
			
			/*
			to create an object with key and value:
			let i
					let prices={} //create the object
					for(i in cow.Milk){
						let price = cow.Milk[i].dayPrice * cow.Milk[i].amount
						prices[`day ${parseInt(i)+1}`] = price //assign the value to the key
						
					}
			*/			

			res.send({
				cow:cowss,
		        cumulated_price:total				
			})
			
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
			const cow =  await 	Cows.update(req.body,{
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

		res.send(req.params.id)
		const cow = await Cows.destroy({
			where:{
				id:req.params.id
			}
		})

		res.send("deleted")
		
		}

	catch(err){
			console.log(err)
			res.status(500).send({
			error: 'Something went wrong while deleting  your Cow record'
		})
	}
}
}