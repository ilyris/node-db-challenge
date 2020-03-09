const express = require("express")
const db = require("../data/config")

const router = express.Router()

const addProject = async project => {
    console.log('adding the project to the table');
    return db("project").insert(project);
}

router.get("/", async (req, res, next) => {
	try {
		const projects = await db("project")
			.select("id", "project_name", "project_description", "completed")

		res.json(projects)
	} catch(err) {
		next(err)
	}
})

router.post("/add", async (req, res, next) => {
    let {project_name, project_description, completed} = req.body;
    
    const reconstructProject = { 
        project_name: project_name,
        project_description: project_description,
        completed: completed
    }
	try {
        await addProject(reconstructProject);
        return res.status(201).json({
            message: "Project added",
        })

	} catch(err) {
		next(err)
	}
})

module.exports = router