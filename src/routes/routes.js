const AuthController = require('../controllers/AuthController')
const AuthPolicy = require('../Policies/AuthPolicy')
const CowsController = require('../controllers/CowsController')
const MilkController = require('../controllers/MilkController')
const AiController = require('../controllers/AiController')
const FarmersController = require('../controllers/FarmersController')
const FeedingController = require('../controllers/FeedingController')
const VaccinationsController = require('../controllers/VaccinationsController')
const TreatmentsController = require('../controllers/TreatmentsController')
const multer = require('multer')


//// Storage strategy

const storage = multer.diskStorage({  
    destination: (req, file,cb)=>{
        cb(null,'./uploads')  
    },

    filename: (req, file,cb)=>{
        cb(null,new Date().toISOString()+file.originalname)
    }
})


const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') 

  {
    return cb(null, true)
  } else {
    console.log(Error)
    return cb(null, false)
  }
}


const upload = multer({
    storage:storage,
 fileFilter: fileFilter,
    limits: {
        fileSize : 1024*1024*5
    }
})

module.exports  = (app) =>{

	// user routes
	app.post('/register',AuthPolicy.register,AuthController.register)
	app.post('/login',AuthController.login)
    app.delete('/user/dPelete/:id',AuthController.remove)
    app.patch('/user/update/:id',AuthPolicy.register,AuthController.edit)
    app.get('/getUser/:id',AuthController.show)
    
    //cow routes
    app.post('/addCow', upload.single('cow_img'),CowsController.post)
    app.get('/getCow/:id', CowsController.show)
    app.get('/cow/update/:id',CowsController.edit)
    app.delete('/cow/delete/:id',CowsController.remove)
    

    //Milk routes
    app.post('/addMilk', MilkController.post)
    app.get('/myMilk/:id', MilkController.show)
    app.get('/milk/update/:id',MilkController.edit)
    app.delete('/Milk/delete/:id',MilkController.remove)

    //AI details routes
    app.post('/addAI', upload.fields([{name:'leaflet_img'},{name:'straw_img'}]),AiController.post)
    app.get('/getAi/:id', AiController.show)
    app.patch('/Ai/update/:id',AiController.edit)
    app.delete('/AI/delete/:id',AiController.remove)

    //Farmers routes
    app.post('/addFarmer', FarmersController.post)
    app.get('/getFarmer/:id', FarmersController.show)
    app.patch('/Farmer/update/:id',FarmersController.edit)
    app.delete('/farmer/delete/:id',FarmersController.remove)

    //Feeding routes
    app.post('/addFeed', FeedingController.post)
    app.get('/getFeed/:id', FeedingController.show)
    app.patch('/Feed/update/:id',FeedingController.edit)
    app.delete('/Feed/delete/:id',FarmersController.remove)

    //Vaccination routes
    app.post('/addVaccination', VaccinationsController.post)
    app.get('/getVaccination/:id', VaccinationsController.show)
    app.patch('/Vaccination/update/:id',VaccinationsController.edit)
    app.delete('/Vaccination/delete/:id',VaccinationsController.remove)

    //Treatments routes
    app.post('/addTreatment', TreatmentsController.post)
    app.get('/getTreatment/:id', TreatmentsController.show)
    app.patch('/Treatment/update/:id',TreatmentsController.edit)
    app.delete('/Treatment/delete/:id', TreatmentsController.remove)

}  
