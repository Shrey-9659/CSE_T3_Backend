// What is Node.js --
// Node.js is a run time environment for JS which allows us to write JS code on server side as well
// It is built on chrome's V8 javascript engine



// Key features of Node.js --
// It is asynchronous and event driven
// Asynchronous Programming allows us to start a task and move on to the other task before the first task finishes.
// Benefit is that we will not be wasting our time on a single task



// Typical use cases
// - Web servers
// - Restful APIs
// - Real time applications like chat applications
// - Command line tools



// Setting up Node.js
// Install node in your system and by default npm will also be downloaded.
// Type "node -v" and "npm -v" to check if they have been installed



// Node Fundamentals
// REPL(Read Eval Print Loop)
// Basic script by creating a file in VS Code



// What is npm.
// NPM is a package manager, earlier it was termed as Node Package Manager, but after time it now contains packages apart from 
// node as well, so it is not appropriate to call it NODE package manager. 



// What is package.json file
// The first thing we do while initializating a node project is typing "npm init" on the terminal. That time the package.json file
// is created. I contains metadata of our node project. I also contains details about the dependencies which are being used in the 
// project along with the version and the scripts.
// As start is the frequently used script which working with a node project.



// Difference between package and package lock
// Whenever we start a new node project we write npm init and by default a package.json file is created but not package-lock file.
// Though both of them are used for managing dependencies. But package.json file also holds the projects metadata
// scripts. It contains all the information about the project and how it should be built and run.
// Package-lock.json keep the information about the exact version of the dependencies along with the information about 
// dependencies of dependencies. It ensures that everyone who is installing the project gets the exact same version which
// helps in avoiding bugs or issues which can be caused due to version mismatch.



// Difference between dependency and dev-dependency
// Dependencies are the packages which are being installed and used when the application is running in production.
// They are the core functionalities of your project which need to be there when the project is being deployed.
// "npm install package-name" or "npm i package-name"
// eg - express, mongoose, axios, cors, dotenv
// Dev-Dependencies are the dependencies which are only required during the time of development but are not necessary
// during the time of deployment
// "npm install package-name --save-dev" or "npm i package-name --save-dev"
// eg - eslint, nodemon, babel, typescript 



// Core Modules - fs
// FS MODULE -->
// It is a Node.js module which lets you interact with the file system. It helps to do operations on the file.
// Like creating a file, deleting, appending a file, reading a file.
// To perform all these things you need to use that module in your node project. "const fs = require("fs").

// WRITING A FILE
// 1. -> fs.writeFileSync("fileName", "data")
// 2. -> fs.writeFile("fileName", "data", function(err){})

// READING A FILE
// 3. -> fs.readFileSync("fileName", "encoding(UTF-8)")
// 4. -> fs.readFile("fileName", "encoding(UTF-8", function(err, data){})

// APPENDING A FILE
// 5. -> fs.appendFileSync("fileName", "data")
// 6. -> fs.appendFile("fileName", "data", function(err){})

// DELETING A FILE
// fs.unlinkSync("fileName")

// COPYING A FILE TO ANOTHER FILE
// fs.cpSync("fileName", "newFileName");

// STATISTICS OF A FILE
// fs.statSync("fileName")



// Core Modules - http
// HTTP MODULE -->

// One of the code modules which allows you to create and manage HTTP server

// Importing HTTP module ->
// const http = require("http");

// Creating an HTTP server ->
// http.createServer(function(req, res){})
// Req represents all the incoming HTTP requests, it contains all the necessary information like URL, HTTP methods
// Res represents all the outgoing HTTP response. You send the data back to the client with the help of response.

// Starting HTTP server
// app.listen(port, function(){}); 


// HTTP methods ->
// GET, POST, PUT, PATCH, DELETE

// GET method ->
// When our intention is when we want to get some data from the server, 
// like whenever we write some url on the browser, in that case browser by default creates a get request to the server
// Whenever our server received the get request, in that case our server goes to the database, read the data and whatever
// data we receive from the database, we serve that to the client.
// Sends the data in the url

// POST method ->
// When our intention is to send some data to the server and we want the data to be processed by the server.  
// Used to submit data to the server, and used to create or modify some resource on the server.
// Sends the data in the body of the request
// Common usecase -> submitting form, uploading some data, adding a new entry in the database, sending the data to the api

// PUT method ->
// It is used to updating or creating resource on the server.
// If we have the resource already there, in that case put method updates the resource. And if it is not there, in that
// case it create a new resource on the server.
// Sends the data in the body of the request.

// PATCH method ->
// It is also used for updating the resourse on the server. But in case of PUT we need to send the entire representation
// of the resource. But in patch we can send only the one which is required to be changed.
// Sends the data in the body of the request.

// DELETE method ->
// It is used to delete the resource from the server.


// Unserstanding Versioning
// xx.yy.zz
// ^
// ~

// ---------------------------------------------------------------------------------------------------------------------------

// Download LTS version and not the latest or the current one
// Node.Js -> 2009
// JS is a scripting language
// Chrome -> JS Engine with the name V8 engine

// Why dealing with server we prefer async over sync?

// node package manager





// console.log("first")
// for(i = 0; i<1000000000; i++){
//     if(i == 999999999){
//         console.log("second")
//     }
// }
// console.log("third")

// Status Code
// 1xx - Informational Codes
// 2xx - Success Codes
// 3xx - Reicrectional Codes
// 4xx - Client-Side Error Codes
// 5xx - Server-Side Error Codes

// Headers
// Request Headers
// Response Headers
// Security Headers
// Custom Headers : X-key

// 22.11.00 -- xx.yy.zz
// xx -- Major update
// yy -- Minor update
// zz -- Patch update

// ^22.11.00 -- (Minor, Patch)
// ~22.11.00 -- (Patch)
// 22.11.00 -- (No update)