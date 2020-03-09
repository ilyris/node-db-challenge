const express = require("express")
const db = require("../data/config")

const router = express.Router()

const addResources = async resources => {
    console.log('adding the resources to the table');
    return db("resources").insert(resources);
}

router.get("/", async (req, res, next) => {
	try {
		const resources = await db("resources")
			.select("id", "resources_name", "resources_description", "project_id")

		res.json(resources)
	} catch(err) {
		next(err)
	}
})

router.post("/add", async (req, res, next) => {
    let {resources_name, resources_description, project_id} = req.body;
    
    const reconstructResource = { 
        resources_name: resources_name,
        resources_description: resources_description,
        project_id: project_id
    }
	try {
        await addResources(reconstructResource);
        return res.status(201).json({
            message: "Resources added",
        })

	} catch(err) {
		next(err)
	}
})

module.exports = router