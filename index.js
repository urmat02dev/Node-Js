/** Node JS (7) **/

const fs = require("fs");
const path = require("path");
const readJson = require("./one.json")
const csv = require("csv-parser")
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


// fs.writeFile("two.txt", "Hello",(err)=> {
//     if (err) console.log(err)
// })

/** Case 1 Записаем JSON file **/
const man = {
    id:"1",
    name:"Urmat",
    age:21,
    car:"Lexus"
}
// fs.writeFile("one.json", JSON.stringify(man),(err)=> {
//     if (err) console.log(err)
// })

/** Case 2 Читаем JSON file **/
console.log(readJson)


/** Case 3 Читаем CSV file **/
// npm i csv-parser

const results = [];

fs.createReadStream('Online Menu - Лист1.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results);
    });
/** Case 4 Записаем CSV file **/
// npm i csv-writer

const csvWriter = createCsvWriter({
    path: 'test.csv',
    header: [
        {id: 'id', title: 'ID'},
        {id: 'name', title: 'NAME'},
        {id: 'age', title: 'AGE'},
        {id: 'car~', title: 'CAR'},
    ]
});



const data = [
    {
        id:"1",
        name:"Urmat",
        age:21,
        car:"Lexus"
    }, {
        id:"1",
        name:"Urmat",
        age:21,
        car:"Lexus"
    }, {
        id:"1",
        name:"Urmat",
        age:21,
        car:"Lexus"
    }, {
        id:"1",
        name:"Urmat",
        age:21,
        car:"Lexus"
    }
]
csvWriter.writeRecords(data)       // returns a promise
    .then(() => {
        console.log('...Done');
    });

