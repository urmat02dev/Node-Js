/** Node JS (8) **/


const htpp = require("http")
const url = require("url")
htpp.createServer((request, response) => {
    console.log("Server work");
    /** Case (1) - GET запрос **/
    if (request.method === "GET") {

        console.log(request.method)
        let urlRequest = url.parse(request.url, true)
        console.log(urlRequest.query.test)
        if (urlRequest.query.test % 2 === 0) {
            response.end("Go")
        }
        response.end("End ")
    }
    else{
        /** Case (2) - POST запрос **/
        let body = "";
        request.on("data", chunk => {
            body += chunk.toString()
        })
    }
}).listen(8000);