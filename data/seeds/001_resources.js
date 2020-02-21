exports.seed = function(knex) {
  return knex('resources').insert([
    {
      id: 1,
      name: 'Lambda Student',
      description: 'a soon to be hired developer'
    },
    {
      id: 2,
      name: 'MacBook Pro #1',
      description: 'an overly expensive laptop computer'
    }
    {
      id: 3,
      name: 'Any Windows PC or Laptop',
      description: 'a reliable, affordable, and more powerful alternative to overly priced Apple products'
    }
  ]);
};