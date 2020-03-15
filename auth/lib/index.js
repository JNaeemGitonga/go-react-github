"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = require("dotenv");
dotenv_1.config();
var port = process.env.PORT || 9903;
var app = express_1.default();
app.get('/', function (_, res) {
    res.json('i work');
});
app.listen(port, function () {
    console.log('This is your working dir: ', __dirname);
    console.log();
    console.log('Grind hard on server port ' + port);
});
//# sourceMappingURL=index.js.map