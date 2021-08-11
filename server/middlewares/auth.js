const {tokenVerifier} = require('../helpers/jwt')

function authentication(req,res,next){
    console.log("On MiddleWare authentication")
    let access_token = req.headers.access_token
    if(access_token){
        try{
            const decoded = tokenVerifier(access_token)
            req.UserDetail = decoded
            next()
        }catch (err) {
            res.status(500).json({
                message : "User not Authenticated"
            })
        }
    }else{
        res.status(404).json({
            message : "Token Not Found"
        })
    }
}

module.exports = { authentication }