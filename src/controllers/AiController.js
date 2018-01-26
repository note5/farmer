const {Reproduction} = require('../models')
const fs = require('fs')

module.exports  = {

	// create AI record
	async post (req, res) {
		try{
			console.log(req.files)
			if(req.files['leaflet_img']  != undefined){
				if(req.files['straw_img'] !=undefined){


				const insemination =  await Reproduction.create({
					
					cowName: req.body.cowName,
					ear_tag_no: req.body.ear_tag_no,
					AI_date: req.body.AI_date,
					last_calf:req.body.last_calf,
					bull:req.body.bull,
					breed:req.body.breed,
					sire:req.body.sire,
					VetName:req.body.VetName,
					VetCode:req.body.VetCode,
					straw_img:`${cfg.HOST}:${cfg.PORT}/`+req.files['straw_img'][0].path,
	                leaflet_img:`${cfg.HOST}:${cfg.PORT}/`+req.files['leaflet_img'][0].path,
					Last_Calving_date:req.body.Last_Calving_date,
					CowId:req.body.CowId

				})
				res.send('Successfully')

				}else{
					fs.unlink(req.files['leaflet_img'][0].path, (err)=>{
						if (err) throw err
							console.log('file deleted')
					})
					res.send("straw  is jpeg or img or png")
		           }

			
		}
		else{
			console.log('straw_imglllllllll')
				fs.unlink(req.files['straw_img'][0].path, (err)=>{
						if (err) throw err
							console.log('file deleted')
					})
				res.send("leaflet, jpeg or img or png")

			}
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
			const insemination =  await Reproduction.update(req.body,{
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
			const files = await Reproduction.find({
				where:{
					id:req.params.id
				},
				attributes:['straw_img','leaflet_img']
			})

			const leaf = (files['leaflet_img'].substring(15,files['leaflet_img'].length))
			const straw = (files['straw_img'].substring(15,files['straw_img'].length))
			// console.log(leaf)
			fs.unlink(leaf, (err)=>{
						if (err) {console.log(err)}
							console.log('file deleted')
					})
			fs.unlink(straw, (err)=>{
						if (err) {console.log(err)}
							console.log('file deleted')
					})
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
			console.log(err)
			res.status(403).send({
				error:'could not delete'
			})
		} 
		
	}
}