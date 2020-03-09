const express = require("express")
const helmet = require("helmet")
const projectRouter = require("./projects/projects.js")
const taskRouter = require("./tasks/tasks.js")
const resourcesRouter = require("./resources/resources.js")

const server = express()
const port = process.env.PORT || 4000

// server.use(helmet())
server.use(express.json())

server.use("/project", projectRouter)
server.use("/task", taskRouter)
server.use("/resources", resourcesRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})