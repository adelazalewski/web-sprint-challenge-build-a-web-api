const express = require('express');
const helmet = require("helmet");
const projectsRouter = require("./projects/projects-router");
const actionsRouter = require("./actions/actions-router")
const server = express();

server.use(express.json());
server.use(helmet());
server.use(projectsRouter)
server.use(actionsRouter)

// Complete your server here!
server.get('/', (req, res) => {
    res.json({
		message:`Welcome to ${process.env.NAME} 's first api sprint challenge DEC 2020 ${process.env.SPRINT_CHALLENGE}`
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})
// Do NOT `server.listen()` inside this file!

module.exports = server;
