exports.seed = function(knex) {
  // Deletes all
  return knex('projects').del()
    .then(function () {
      // Inserts
      return knex('projects').insert([
        {id: 1, name: 'Code Things', description: 'Code things for yourself', complete: false},
        {id: 2, name: 'Get Hired', description: 'Get a job', complete: true},
        {id: 3, name: 'Become a code wizard', description: 'Make the magic happen', complete: false}
      ]);
    });
};
