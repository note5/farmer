const express  = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {sequelize} = require('./models')
const morgan = require('morgan')
const config = require('./config/config')
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use('/uploads', express.static('uploads'))

require('./routes/routes')(app)

sequelize.sync({force:false})
.then(()=>{
	app.listen(8090  || config.PORT)
	console.log(`running on ${config.PORT}`)
})
 