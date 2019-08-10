const bcrypt = require('bcrypt')
const saltround = 10


const generateHash = (req,res,next) =>{
    bcrypt.hash(req.body.password,saltround)
    .then((hash)=>{
        req.hashpassword = hash
        console.log(hash)
        next()
    })
    .catch((error)=>{
        next({
            "status":500,
            "message":"Could not hash password"
        })
    })
}

const compareHash = (req,res,next) =>{
    
    bcrypt.compare(req.body.password, req.userHashPassword,(err,result)=>{
        if(result){
            next()
        }else{
            res.status(400).send({"message":"Password does not match"})
        } 
        
    })
		
			
		
}


module.exports = {generateHash, compareHash}