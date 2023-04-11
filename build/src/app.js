"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const connect_1 = __importDefault(require("./utils/connect"));
const logger_1 = __importDefault(require("./utils/logger"));
const swagger_1 = __importDefault(require("./utils/swagger"));
const server_1 = __importDefault(require("./utils/server"));
// const port = config.get<number>('port')
exports.app = (0, server_1.default)();
exports.app.listen(1387, () => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.info(`App is running at ${1387}`);
    yield (0, connect_1.default)();
    (0, swagger_1.default)(exports.app, 1387);
}));
