/** Node JS (1-4) **/

// let a = 5;
// let b =4
// b= b*2
// console.log(a)
// console.log(b)

/** Node JS (5) **/

const arg = process.argv
const a = +arg[2]
const b = +arg[3]

// if (a > b ){
//     console.log(a)
// }
// else{
//     console.log(b)
// }
//
// let c = (a > b) ? a : b
// console.log(c)
// let out =""
// for (let i=10; i>=0; i--){
//     out += i + " "
// }
// console.log(out)
//
// let d = [10,20,30]
// let e = d.map(el => el *3)
// console.log(e)

/** Node JS (6) **/

const fs = require("fs");
const path = require("path");



// fs.readFile("t1.txt","utf-8", (err,data) => {
//     console.log(data)
// });
// let text = fs.readFileSync("t2 .txt","utf-8");
// console.log(text)

// fs.readdir("one",  (err,data) => {
//     console.log(data)
//     data.forEach(el => {
//         console.log(el + '\t' + path.extname(el) + "\t" + fs.statSync('one/' + el ).size+"B");
//
//     })
// })

// fs.writeFile("one/newfile.txt","Кандай\nДен-сщщлуктар",(err) => {
//     if (err) console.log(err)
// })

