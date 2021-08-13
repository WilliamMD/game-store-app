const { Products_Image } = require("../models");
// const fs = require("fs");
// const { promisify } = require("util");
// const pipeline = promisify(require("stream").pipeline);

class ProductImageController {
//   static async uploadImage(req, res, next) {
//     try {
//       const {
//         file,
//         body: { name },
//       } = req;

//       const fileName = name + file.detectedFileExtension;
//       await pipeline(
//         file.stream,
//         fs.createWriteStream(`${__dirname}/../public/images/${fileName}`)
//       )
//       res.status(200).json(fileName);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }
 }

module.exports = ProductImageController;
