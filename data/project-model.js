const db = require('../dbConfig');

const find = () => {
  return db('projects');
}

const getProjectActions = (projectId) => {
  return db('actions')
    .where({ project_id: projectId })
    .then(actions => {
      return actions;
    });
}

const getProjectResources = (resourceID) => {
  return db('resources')
    .where({ resource_id: resourceID })
    .then(resources => {
      return resources;
    })
}

const findById = (id) => {
  return db('projects')
    .where({ id })
    .first()
    .then(project => {
      if (project) {
        return getProjectResources(id).then(actions => {
          project.actions = actions;
          return project;
        })
      } else {
        return null;
      }
    })
}

const addProject = (project) => {
  return db('projects').insert(project, 'id')
    .then(projects => {
      const projectID = projects[0];
      return projectID;
    })
}

const addAction = (action) => {
  return db('actions')
    .insert(action, 'id')
    .then(action => {
      const actionID = action[0];
      return actionID;
    })
}

const addResource =(resources) => {
  return db('resources')
    .insert(resources, 'id')
    .then(resources => {
      const resourceID = resources[0];
      return resourceID
    })
}

module.exports = {
  find,
  findById,
  addProject,
  addAction,
  addResource,
}