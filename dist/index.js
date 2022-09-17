"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categories = void 0;
const checkpointCategories_json_1 = __importDefault(require("./checkpointCategories.json"));
exports.categories = [...checkpointCategories_json_1.default.categories];
