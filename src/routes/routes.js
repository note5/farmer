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
    app.delete('/user/delete/:id',AuthController.removeUser)
    app.get('/getUser/:id',AuthController.show)
    
    //cow routes
    app.post('/addCow', CowsController.post)
    app.get('/getCow/:id', CowsController.show)
    app.delete('/cow/delete/:id',CowsController.remove)

    //Milk routes
    app.post('/addMilk', MilkController.post)
    app.get('/myMilk:id', MilkController.show)

    //AI details routes
    app.post('/addAI', AiController.post)
    app.get('/Ai:id', AiController.show)

    //Farmers routes
    app.post('/addFarmer', FarmersController.post)
    app.get('/getFarmer/:id', FarmersController.show)
    app.delete('/farmer/delete/:id',FarmersController.remove)

    //Feeding routes

    app.post('/addFeed', FeedingController.post)
    app.post('/getFeed/:id', FeedingController.show)

    //Vaccination routes
    app.post('/addVaccination', VaccinationsController.post)
    app.post('/getVaccination/:id', VaccinationsController.show)

    //Treatments routes
    app.post('/addTreatment', TreatmentsController.post)
    app.post('/getTreatment/:id', TreatmentsController.show)


}  
