const {Line_Item,Shopping_Cart} = require('../models')

class LineItemController {
    static async showLineItems(req, res) {
        try {
          let item = await Line_Item.findAll({
            order: [["id", "ASC"]],
            include: 
               [Shopping_Cart] 
          });
          res.status(200).json(item);
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

      static async addLineItem(req, res) {
        try {
          const { qty, status, ProductId,Shopping_CartId, order_name } = req.body;
          let lineitem = await Line_Item.create({
            qty, status, ProductId,Shopping_CartId, order_name
          });
          res.status(201).json (lineitem);
        } catch (err) {
          res.status(500).json(err);
        }
      }

      static async deleteLineItem(req, res) {
        try {
              const id = +req.params.id;
              let result = await Line_Item.destroy({
                where: { id },
              });
              res.status(200).json(result)
            } catch (err) {
              res.status(500).json(err);
            }
          }
      static async updateLineItem(req, res) {
            try {
              const id = +req.params.id;
              const { qty, status, ProductId,Shopping_CartId, order_name} = req.body;
              let lineitem = await Line_Item.update(
                {
                    qty, status, ProductId,Shopping_CartId, order_name
                },
                {
                  where: { id },
                }
              );
              res.status(200).json (lineitem);
            } catch (err) {
              res.status(500).json(err);
            }
          }


}

module.exports = LineItemController;