
exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
        table.increments()
        table.text('VIN', 19).unique().notNullable()
        table.text('make', 20).notNullable()
        table.text('model', 20).notNullable()
        table.integer('mileage').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
};
