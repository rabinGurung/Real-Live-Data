require('dotenv').config({ debug: process.env.DEBUG })
const User = require('../databaseModel/User')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.Databasename,process.env.Username,process.env.Password, {
    host: process.env.Server,
    dialect: 'mysql'
  });

const user = User(sequelize,Sequelize)

sequelize.sync({force:true})
.then(()=>{
    console.log('Database connected and table created')
})
.catch(()=>{
    console.log('Database connection failed')
})
module.exports = user