const user = require('../databaseConfig/connection')

const insertUser = (req,res)=>{
    user.create({
        username:req.body.username,
        password:req.hashpassword,
        firstname:req.body.firstname,
        lastname:req.body.lastname
    })
    .then((result)=>{
        res.sendStatus(200)        
    })
    .catch((error)=>{
        res.sendStatus(409)
    })
}

const getUsers = (req,res) =>{
    user.findAll()
    .then((result)=>{
        res.send(result)
    })
    .catch((error)=>{
        res.sendStatus(404)
    })
}







module.exports = {
    insertUser,
    getUsers
}