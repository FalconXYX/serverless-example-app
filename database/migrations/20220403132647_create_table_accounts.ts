import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('accounts', table => {
    table.string('id', 36).primary();
    table.dateTime('created_at').notNullable();
    table.dateTime('updated_at').notNullable();
    table.string('organization_id', 32).notNullable().references('id').inTable('organizations');
    table.string('name', 32).notNullable();
    table.enu('external_service', ['ledger', 'coinbase']).notNullable();
    table.string('external_name', 32).notNullable();
    table.boolean('is_deleted').notNullable().defaultTo(false);
    table.dateTime('deleted_at').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('accounts');
}
