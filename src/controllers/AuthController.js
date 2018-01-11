const {User} = require('../models')
const {Cows} = require('../models')
const {Milk} = require('../models')
const {Feeding} =require('../models')
const {Reproduction} = require('../models')
const jwt = require('jsonwebtoken')
const{Farmer} =require('../models')
const config = require('../config/config')

// JWT helper
function jwtSignUser(user) {
	const DURATION = 60*60*24*7
	return jwt.sign(user,config.auth.jwtSecret, {
		expiresIn:DURATION
	})
}
module.exports  ={

	async register (req, res){
		try{
			const user = await User.create(req.body)
			res.send(user.toJSON())
		}
		catch(err){
			
			res.status(403).send({
				error:'Email already exists'
			})
		} 
		
	},

	async login (req, res){
		try{

			const {email, password} =req.body
			const user  = await User.findOne({
				where:{
					email:email
				}
			}) 

			if(!user){
				res.status(403).send({
					error: 'User not found'
				})
			}

			const validatePass = await user.comparePass(password)

			if(!validatePass){
				res.status(403).send({
					error: 'wrong credentials'
				})
			}else{
				res.status(200).send({
					user:user.toJSON(),
				token: jwtSignUser(user.toJSON())
			})
		}


			
		}
		catch(err){
			res.status(500).send({
				error:'An error occured'
			})
		} 
		
	},

	async show(req, res){
		try{
			
			const user =  await User.findById(req.params.id,{

			 include: [
			 {
			 	 model: Farmer,
			 	 include:[
			 	 	{
			 	 		model: Cows,
			 	 		include:[{
			 	 			model:Milk
			 	 		},
			 	 		{
			 	 			model:Feeding
			 	 		},
			 	 		{
			 	 			model:Reproduction
			 	 		}

			 	 		]
			 	 	}
			 	 ]
			 }
			
			 ]
			})
			
			if(!user){
			res.status(404).send({
				error: 'the user you are looking for not found',
				
			})
		}
		else{
			res.send({
				
				data:user
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

	async removeUser (req, res){
		try{
			const user = await User.destroy({
			where:{
				id:req.params.id
			}
		})
		}
		catch(err){
			
			res.status(403).send({
				error:'Email already exists'
			})
		} 
		
	}
}