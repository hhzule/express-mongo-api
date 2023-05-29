var CustomerModel = require("../../build/src/models/customer.model");
var DealerModel = require("../../build/src/models/dealer.model");
var AdminModel = require("../../build/src/models/admin.model");
var TransactionModel = require("../../build/src/models/transaction.model");
var WatchModel = require("../../build/src/models/watch.model");

const functionReset = async () => {
  try {
    /**MongoDb call */
    let Admin = await AdminModel.deleteMany({});
  } catch (e) {
    console.log(e);
  }
  //   try {
  //     /**MongoDb call */
  //     let Customer = await CustomerModel.remove({});
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   try {
  //     /**MongoDb call */
  //     let Dealer = await DealerModel.remove({});
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   try {
  //     /**MongoDb call */
  //     let Transaction = await TransactionModel.remove({});
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   try {
  //     /**MongoDb call */
  //     let Watch = await WatchModel.remove({});
  //   } catch (e) {
  //     console.log(e);
  //   }
  console.log("first");
};

functionReset();
