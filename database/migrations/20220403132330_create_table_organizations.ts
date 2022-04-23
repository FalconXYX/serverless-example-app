import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('organizations', table => {
    table.string('id', 36).primary();
    table.dateTime('created_at').notNullable();
    table.dateTime('updated_at').notNullable();
    table.string('name', 32).unique().notNullable();
    table.boolean('is_deleted').notNullable().defaultTo(false);
    table.dateTime('deleted_at').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('organizations');
}
