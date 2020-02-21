exports.seed = function(knex) {
  // Deletes all
  return knex('actions').del()
    .then(function () {
      // Inserts
      return knex('actions').insert([
        {id: 1, description: 'research', notes: '...', complete: false, project_id: 1},
        {id: 2, description: 'develop concepts', notes: '...', complete: false, project_id: 1},
        {id: 3, description: 'start building', notes: '...', complete: false, project_id: 1},
        {id: 4, description: 'Apply for jobs', notes: '...', complete: true, project_id: 2},
        {id: 5, description: 'get an interview', notes: '...', complete: true, project_id: 2},
        {id: 6, description: 'make the magic', notes: '...', complete: true, project_id: 2}
      ]);
    });
};
