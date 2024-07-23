// add_rating_to_notes.js
exports.up = (knex) =>
  knex.schema.table("notes", (table) => {
    table.integer("rating").notNullable().defaultTo(1).checkIn([1, 2, 3, 4, 5]); // Adiciona o campo 'rating' com valores de 1 a 5
  });

exports.down = (knex) =>
  knex.schema.table("notes", (table) => {
    table.dropColumn("rating"); // Remove o campo 'rating'
  });
