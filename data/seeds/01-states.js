exports.seed = function(knex) {
  return knex('states').insert([
    {
      name: 'Louisiana',
      population: 4648794,
      capital: 'Baton Rouge',
    },
  ]);
};