const { Products_Image } = require("../models")

class ProductImageController {
  static async showImages(req, res) {
    try {
      let img = await Products_Image.findAll({
        order: [["id", "ASC"]],
      });
      res.status(200).json(img);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async uploadImages(req, res) {
    try {
      const { primary, ProductId } = req.body;
      let filename = req.file.filename;
      let filesize = req.file.size;
      let filetype = req.file.mimetype;
      let upload = await Products_Image.create({
        filename,
        filesize,
        filetype,
        primary,
        ProductId,
      });
      res.status(201).json(upload);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async updateImages(req, res) {
    try {
      const id = +req.params.id;
      const { primary, ProductId } = req.body;
      let filename = req.file.filename;
      let filesize = req.file.size;
      let filetype = req.file.mimetype;
      let img = await Products_Image.update(
        { filename, filesize, filetype, primary, ProductId },
        {
          where: { id },
        }
      );
      res.status(200).json({
        message: "Status Has Been Update",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async deleteImages(req, res) {
    try {
      const id = +req.params.id;
      let result = await Products_Image.destroy({
        where: { id },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = ProductImageController;
