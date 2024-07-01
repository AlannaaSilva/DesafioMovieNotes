// remove_links_table.js
exports.up = (knex) => knex.schema.dropTableIfExists("links");

exports.down = (knex) =>
  knex.schema.createTable("links", (table) => {
    table.increments("id");
    table.text("url").notNullable();
    table
      .integer("note_id")
      .references("id")
      .inTable("notes")
      .onDelete("CASCADE");
    table.timestamp("created_at").default(knex.fn.now());
  });
