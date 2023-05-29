var CustomerModel = require("../models/customer.model");
var DealerModel = require("../models/dealer.model");
var AdminModel = require("../models/admin.model");
var TransactionModel = require("../models/transaction.model");
var WatchModel = require("../models/watch.model");

const functionReset = async () => {
  try {
    /**MongoDb call */
    let Admin = await AdminModel.deleteMany();
  } catch (e) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
  try {
    /**MongoDb call */
    let Customer = await CustomerModel.deleteMany();
  } catch (e) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
  try {
    /**MongoDb call */
    let Dealer = await DealerModel.deleteMany();
  } catch (e) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
  try {
    /**MongoDb call */
    let Transaction = await TransactionModel.deleteMany();
  } catch (e) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
  try {
    /**MongoDb call */
    let Watch = await WatchModel.deleteMany();
  } catch (e) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
  console.log("first");
};

functionReset();
