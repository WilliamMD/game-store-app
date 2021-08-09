'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User);
      Order.hasMany(models.Line_Item);
    }
  };
  Order.init({
    name: DataTypes.STRING,
    created_on: DataTypes.DATE,
    subtotal: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    tax: DataTypes.INTEGER,
    total_due: DataTypes.INTEGER,
    total_qty: DataTypes.INTEGER,
    payt_trx_number: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    status: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};