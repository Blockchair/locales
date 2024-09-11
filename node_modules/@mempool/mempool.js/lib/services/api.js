"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAPI = void 0;
var axios_1 = __importDefault(require("axios"));
var makeAPI = function (apiEndpoint) {
    var api = axios_1.default.create({
        baseURL: apiEndpoint,
    });
    return {
        api: api,
    };
};
exports.makeAPI = makeAPI;
