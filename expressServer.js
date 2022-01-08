// Node.js is the language
// Express is nodem a node module

// http is a native module
// const http = require('http)

// express is a 3rd party module
const express = require('express')
const { all } = require('proxy-addr')
// An "app" is the express function (createApplication inside the Express module)
// invoked and is an Express Application
const app = express()

// all is a method, and it takes 2 args:
// 1. route
// 2.callback to run if the route is requested
app.all('*', (req, res) => {
	// Express handles the basic Headers(status code, mime-type)! That is awesome
	res.send(`<h1>This is the home page</h1>`)
	// Express handles the end! Awesome!
})

app.listen(3000)
console.log('The server is listening on port 3000')
