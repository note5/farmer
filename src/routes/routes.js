const AuthController = require('../controllers/AuthController')
const AuthPolicy = require('../Policies/AuthPolicy')
const CowsController = require('../controllers/CowsController')
const MilkController = require('../controllers/MilkController')
const AiController = require('../controllers/AiController')
const FarmersController = require('../controllers/FarmersController')
const FeedingController = require('../controllers/FeedingController')
const VaccinationsController = require('../controllers/VaccinationsController')
const TreatmentsController = require('../controllers/TreatmentsController')


module.exports  = (app) =>{
	
	// user routes
	app.post('/register',AuthPolicy.register,AuthController.register)
	app.post('/login',AuthController.login)
    app.delete('/user/delete/:id',AuthController.remove)
    app.patch('/user/update/:id',AuthPolicy.register,AuthController.edit)
    app.get('/getUser/:id',AuthController.show)
    
    //cow routes
    app.post('/addCow', CowsController.post)
    app.get('/getCow/:id', CowsController.show)
    app.get('/cow/update/:id',CowsController.edit)
    app.delete('/cow/delete/:id',CowsController.remove)

    //Milk routes
    app.post('/addMilk', MilkController.post)
    app.get('/myMilk/:id', MilkController.show)
    app.get('/milk/update/:id',MilkController.edit)
    app.delete('/Milk/delete/:id',MilkController.remove)

    //AI details routes
    app.post('/addAI', AiController.post)
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
