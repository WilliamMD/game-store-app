const { User, Product,Products_Image } = require ('../models')


class ProductController {
    static async showProducts(req, res) {
      try {
        let product = await Product.findAll({
        order: [["id", "ASC"]],
          include: [{
              model : User,Products_Image
            //   required: true,
          }]
        });
  
        res.status(200).json(product);
      } catch (err) {
        res.status(500).json(err);
      }
    }

    static async showProductsUsers(req, res) {
      try{
        const {id} = req.UserDetail
        let product =  await Product.findAll({
          where : { UserId : id }
        })
        res.status(200).json(product)

      }catch(err){
        res.status(500).json(err)
      }
    }

    static async showProductsById(req, res) {
      try {
        const id = +req.params.id;
        // console.log(id)
        let product = await Product.findOne({
          where: {id},
            include: [{
                model : User,Products_Image
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
      const { name, desc, price, stock, expire_date, weight, category, brand, condition } = req.body;
      let product = await Product.update(
        {
            name, desc, price, stock, expire_date, weight, category, brand, condition
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
   static async updateViews(req, res) {
     try{
       const id = +req.params.id;
       let product = await Product.increment(
         {
           views : +1,
          },
          {
            where: { id },
          }
       )
       res.status(200).json(product)
     }catch (err) {
       res.status(500).json(err)
     }
   }
   static async updateSold(req, res) {
    try{
      const id = +req.params.id;
      let product = await Product.increment(
        {
          total_sold : +1,
         },
         {
           where: { id },
         }
      )
      res.status(200).json(product)
    }catch (err) {
      res.status(500).json(err)
    }
  }

}

module.exports = ProductController;