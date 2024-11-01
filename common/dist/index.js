"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update_bloginputs = exports.create_bloginput = exports.singninInput = exports.singnupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.singnupInput = zod_1.default.object({
    username: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string().optional()
});
exports.singninInput = zod_1.default.object({
    username: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string().optional()
});
exports.create_bloginput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string()
});
exports.update_bloginputs = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string()
    // id:z.string()
});
