const http = require("http")
const port = 5000


const server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type" : "text/plain"})
    res.end("Hello this is first node js")
})


server.listen(port, () => {
    console.log(`Sever is running at http://localhost:${port}`)
})