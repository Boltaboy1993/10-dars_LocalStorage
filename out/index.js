"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_localstorage_1 = require("node-localstorage");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let ox = new node_localstorage_1.LocalStorage('./malumotlar');
// let abc: number[] = [1,2,3,4,5,6,7,8,9,10]
// let abd: string[] = ['saom','xayir', 'goodbye']
// type objes = {
//   name:     string
//   username: string
//   age:      number
// }
//  let objes = {
//    name: 'Boltaboy',
//    username: 'Muratov',
//    age: 27
//  }
//   ox.setItem('objes', JSON.stringify(objes))
//   ox.setItem('abc', JSON.stringify(abc))
//   ox.setItem('abd', JSON.stringify(abd))
//   let ozgaruvchi: objes = JSON.parse(ox.getItem('objes')!)
//   console.log(ozgaruvchi);
let name = prompt('odingni kiritey!');
console.log('ey', name);
