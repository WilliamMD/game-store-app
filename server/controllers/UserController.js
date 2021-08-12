const { User, Product, Order, Shopping_Cart, Products_Image, Line_Item } = require('../models');
const { decrypter } = require('../helpers/bcrypt')
const {tokenGenerator} = require('../helpers/jwt')

class UserController {
        static async showUsers(req, res) {
          try {
            let users = await User.findAll({
              order: [["id", "ASC"]],
            });
      
            res.status(200).json(users);
          } catch (err) {
            res.status(500).json(err);
          }
        }
    
        static async registerUsers(req, res) {
            try {
              const { name, email,password,birthdate,gender,avatar,type } = req.body
              let user = await User.create({
                name, email, password, birthdate, gender, avatar, type
              });
              res.status(201).json(user);
            } catch (err) {
              res.status(500).json(err);
            }
          }
        
        static async loginUsers(req, res) {
            try{
                const {email,password} = req.body
                let user = await User.findOne({
                    where : {email}
                })
                if(user){
                    if(decrypter(password,user.password)){
                      // res.status(200).json(user)
                      let access_token = tokenGenerator(user)
                        res.status(200).json({
                          access_token
                        })
                    } else {
                        res.status(403).json({
                            message : "Invalid Password"
                        })
                    }
                }else{
                    res.status(404).json({
                        message : " Not Found ! "
                    })
                }
            }catch (err) {
                res.status(500).json(err)
            }
        }
    
        static async deleteUsers(req, res) {
        try {
              const id = +req.params.id;
              let result = await User.destroy({
                where: { id },
              });
              res.status(200).json(result)
            } catch (err) {
              res.status(500).json(err);
            }
          }
        
        static async updateUsers(req, res) {
        try {
          const id = +req.params.id;
          const { name, email,password,birthdate,gender,avatar,type } = req.body;
          let users = await User.update(
            {
                name, email,password,birthdate,gender,avatar,type
            },
            {
              where: { id },
            }
          );
    
          res.status(200).json(users);
        } catch (err) {
          res.status(500).json(err);
        }
      }
    
    

}

module.exports = UserController;