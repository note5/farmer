module.exports = {
	PORT:8090,
	HOST:'localhost',
	db:{
		database: process.env.DB_NAME || 'farmer',
		username: process.env.DB_USER || 'root',
		password: process.env.DB_PASS || '1234',
		options:{
			dialect: process.env.DIALECT || 'mysql',
			host: process.env.HOST || 'localhost',
			port: process.env.PORT || 3306
		} 
	},
	auth:{
		jwtSecret:process.env.JWT_SECRET ||'hatarisana'
	}
}