const { User, Product } = require ('../models')


class ProductController {
    static async showProducts(req, res) {
      try {
        let product = await Product.findAll({
        order: [["id", "ASC"]],
          include: [{
              model : User,
              attributes: ["id","name","email"]
            //   required: true,
          }]
        });
  
        res.status(200).json(product);
      } catch (err) {
        res.status(500).json(err);
      }
    }

    static async addProducts(req, res) {
        try {
          const { name, desc, price, stock, expire_date, weight, category, brand, condition,total_sold,rating,views,UserId } = req.body;
          let product = await Product.create({
            name, desc, price, stock, expire_date, weight, category, brand, condition,total_sold,rating,views,UserId
          });
          res.status(201).json (product);
        } catch (err) {
          res.status(500).json(err);
        }
      }

    static async deleteProducts(req, res) {
    try {
          const id = +req.params.id;
          let result = await Product.destroy({
            where: { id },
          });
          res.status(200).json(result)
        } catch (err) {
          res.status(500).json(err);
        }
      }
    
    static async updateProducts(req, res) {
    try {
      const id = +req.params.id;
      const { name, desc, price, stock, expire_date, weight, category, brand, condition,total_sold,rating,views,UserId } = req.body;
      let product = await Product.update(
        {
            name, desc, price, stock, expire_date, weight, category, brand, condition,total_sold,rating,views,UserId
        },
        {
          where: { id },
        }
      );
      res.status(200).json (product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

}

module.exports = ProductController;