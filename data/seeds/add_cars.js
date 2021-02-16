
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '9098930298', make: 'Honda', model: 'Civic', mileage: '80000'},
        {VIN: '7839837482', make: 'Acura', model: 'ILX', mileage: '0'}
      ]);
    });
};
