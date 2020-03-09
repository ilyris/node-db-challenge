const express = require("express")
const db = require("../data/config")

const router = express.Router()

const addTasks = async task => {
    console.log('adding the task to the table');
    return db("task").insert(task);
}

router.get("/", async (req, res, next) => {
	try {
        const tasks = await db("task as t")
            .leftJoin('project as p', "p.id", "t.project_id")
		    .select("t.id", "t.task_description", "t.notes", "p.project_name", "p.project_description")

		res.json(tasks)
	} catch(err) {
		next(err)
	}
})

router.post("/add", async (req, res, next) => {
    let {task_description, notes, completed, project_id} = req.body;
    
    const reconstructTask = { 
        task_description,
        notes,
        completed,
        project_id,
    }
	try {
        await addTasks(reconstructTask);
        return res.status(201).json({
            message: "Task added",
        })

	} catch(err) {
		next(err)
	}
})

module.exports = router