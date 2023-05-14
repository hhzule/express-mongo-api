// import mongoose from "mongoose";
// import supertest from "supertest";
// import createServer from "../utils/server";
// import { createDealer } from "../service/dealer.service"
// import { MongoMemoryServer } from "mongodb-memory-server"
// const app = createServer()
// // import * as UserService from "../service/user.service";
// // import * as SessionService from "../service/session.service";
// // import { createUserSessionHandler } from "../controller/session.controller";

// const id = new mongoose.Types.ObjectId().toString()
// console.log("_id==>", id)
// const newDealerPayload = {
//     _id: id,
//     email: "hh@gmail.com",
//     name: "hh",
//     company: "ABC company",
//     commision: 5
// }

// describe("dealer", () => {
//     // dealer creation
//     beforeAll(async () => {
//         const mongoServer = await MongoMemoryServer.create()
//         await mongoose.connect(mongoServer.getUri())
//     })

//     afterAll(async () => {
//         await mongoose.disconnect()
//         await mongoose.connection.close()
//     })

//     describe("Dealer", () => {
//         describe("create dealer", () => {
//             it("should return ==> ok", async () => {
//                 const newDealer = await createDealer(newDealerPayload)
//                 // const { body, statusCode } = await supertest(app).post('/createdealer');
//                 console.log("first ==>", newDealer)
//             });
//         });
//     });
// })
describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
      expect(2+2).toBe(4);
    });
   })