const {tokenVerifier} = require('../helpers/jwt')
const {Product,User,Order} = require ('../models')

function authentication(req,res,next){
    console.log("On MiddleWare Authentication")
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

function authorization(req, res, next) {
    console.log("On MiddleWare Authorization")
    const id = +req.params.id;
    const UserId = +req.UserDetail.id

    Product.findByPk(id)
        .then(product => {
            if (!product) {
                res.status(404).json({
                    message: "Not Found"
                })
            } else if (product.UserId !== UserId) {
                res.status(401).json({
                    message: "User Not Authorized"
                })
            } else {
                next()
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })

    Order.findByPk(id)
        .then(order => {
            if (!order) {
                res.status(404).json({
                    message: "Not Found"
                })
            } else if (order.UserId !== UserId) {
                res.status(401).json({
                    message: "User Not Authorized"
                })
            } else {
                next()
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })

    Shopping_Cart.findByPk(id)
        .then(cart => {
            if (!cart) {
                res.status(404).json({
                    message: "Not Found"
                })
            } else if (cart.UserId !== UserId) {
                res.status(401).json({
                    message: "User Not Authorized"
                })
            } else {
                next()
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })

    Line_Item.findByPk(id)
        .then(lineitem => {
            if (!lineitem) {
                res.status(404).json({
                    message: "Not Found"
                })
            } else if (lineitem.UserId !== UserId) {
                res.status(401).json({
                    message: "User Not Authorized"
                })
            } else {
                next()
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

module.exports = { authentication,authorization }