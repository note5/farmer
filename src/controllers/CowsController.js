const {Cows} = require('../models')
const{Milk} = require('../models')
const{Farmer} =require('../models')
const{Reproduction} = require('../models')
const{Feeding} =require('../models') 
const{Treatments} =require('../models') 
const{Vaccinations} =require('../models') 
const multer = require('multer')
const fs = require('fs')
const cfg = require('../config/config')


module.exports  = {

	async post (req, res) {

			console.log(req.filErr)
		try{

		   if(!req.filErr){

		   		const cow =  await Cows.create(
				
				{ name: req.body.name,
				  breed: req.body.breed,
				  age: req.body.age,
				  weight:req.body.weight,
				  FarmerId: req.body.FarmerId,
				  state: req.body.state,
				  image_path: `${cfg.HOST}:${cfg.PORT}/`+req.file.path
				}
			)
			res.send('Successfully added record of cow '+ req.body.name)

		   }
		   else{
		   	res.send("ensure your file is an image of jpeg or png format and it is under 5mb")

		   }   
		}

		catch(err){
			console.log(err)
		res.status(500).send({
			error: 'Something went wrong while creating a Cow record'
		})
		} 
	},

	async show(req, res,next){
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
            if(total_price.length > 0){
            	total = total_price.reduce(function(acc, val)
			 { 
			 	return acc + val
			 })
            }
            else{
            	total = "no milk record"
            }
			
			
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
async upload(req,res){
	try{
	

	}
	catch(err){
		console.log(err)

	}
},

async remove (req,res){
	try{

		const files = await Cows.find({
				where:{
					id:req.params.id
				},
				attributes:['image_path']
			})
		if(files){

			 const cow_img = (files['image_path'].substring(15,files['image_path'].length))
			
	    // console.log(cow_img)

					fs.unlink(cow_img, (err)=>{
					if (err) {
						console.log(err)
					}
						console.log('file deleted')
				})
				const cow = await Cows.destroy({
					where:{
						id:req.params.id
					}
				})

				res.send("deleted")
		}else{

				res.send("no record found")
		}

		
		
		}

	catch(err){
			console.log(err)
			res.status(500).send({
			error: 'Something went wrong while deleting  your Cow record'
		})
	}
}
}