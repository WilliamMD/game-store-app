const {Line_Item} = require('../models')

class LineItemController {
    static async showLineItems(req, res) {
        try {
          let items = await Line_Item.findAll({
            order: [["id", "ASC"]],
          });
          res.status(200).json(items);
        } catch (err) {
          res.status(500).json(err);
        }
      }

      static async showItemsUsers(req, res) {
        try{
          const {id} = req.UserDetail
          let items =  await Line_Item.findAll({
            where : { UserId : id }
          })
          res.status(200).json(items)
  
        }catch(err){
          res.status(500).json(err)
        }
      }
      static async showItemsById(req, res) {
        try {
          const id = +req.params.id;
          // console.log(id)
          let product = await Line_Item.findByPk(id);
          res.status(200).json(product);
        } catch (err) {
          res.status(500).json(err);
        }
      }

}

module.exports = LineItemController;