const express = require('express');
const server = express();
const projects = require('./data/project-model');

// server.use('/api/projects', projects);

server.use(express.json());

server.get('/', (req, res) => {
    projects.find()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

server.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    
    projects.findById(id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

server.post('/', (req, res) => {
    const newProject = req.body;

    projects.addProject(newProject)
    .then(project => {
        res.status(201).json({success: true, project})
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

server.post('/:id/actions', (req, res) => {
    const action = {
        project_id: req.params.id,
        ...req.body
    }
    projects.addAction(action)
        .then(action => {
            res.status(201).json(action)
        })
        .catch(error => {
            res.status(500).json(error)
        })

})
server.post('/', (req, res) => {
    const newResource = req.body;

    resources.addResources(newResource)
    .then(resources => {
        res.status(201).json({success: true, resources})
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

server.post('/:id/resources', (req, res) => {
    const resources = {
        resources_id: req.params.id,
        ...req.body
    }
    projects.addResources(resources)
        .then(resources => {
            res.status(201).json(resources)
        })
        .catch(error => {
            res.status(500).json(error)
        })

})

module.exports = server;