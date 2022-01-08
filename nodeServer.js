const http = require('http')
const PORT = 3000

// fs = file system module! It is built into Node.
const fs = require('fs')

// The http module has a createServer method
// 	* Takes 1 argument, which is a callback
// That Callback has 2 arguments: req, res

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		// res is our way of responding to the requester
		// http message structure:
		// 1. Start-line **Express Takes Care Of This**
		// 2. Header
		// 3. Body

		// writeHead takes 2 args:
		// 1. status code
		// 2. object for the mime-type
		res.writeHead(200, { 'content-type': 'text/html' })
		// res.write('<h1>Home Page</h1>')
		const homePageHTML = fs.readFileSync('node.html')
		res.write(homePageHTML)
		res.end()
	} else if (req.url === '/node.png') {
		res.writeHead(200, { 'content-type': 'img/png' })
		const image = fs.readFileSync('node.png')
		res.write(image)
		res.end()
	} else {
		res.writeHead(404, { 'content-type': 'text/html' })
		res.write(`<h3>The page you are looking for doesn't exist</h3>`)
		res.end()
	}
})

// createServer returns an object with a listen method
// listen takes 1 argument
// 1. port to listen for http traffic on

server.listen(PORT)
