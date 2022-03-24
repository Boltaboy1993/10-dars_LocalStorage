import { LocalStorage } from "node-localstorage";
import PromptSync from "prompt-sync"
const prompt = PromptSync()
let ox = new LocalStorage('./malumotlar')

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


let name = prompt('odingni kiritey!')

console.log('ey', name);
