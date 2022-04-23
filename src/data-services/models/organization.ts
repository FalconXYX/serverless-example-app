import { mixin, snakeCaseMappers, JSONSchema } from 'objection';

import { BaseModel } from './base-model';

export class Organization extends mixin(BaseModel) {
  public static override tableName = 'organizations';
  public static override columnNameMappers = snakeCaseMappers();

  public static override jsonSchema: JSONSchema = {
    type: 'object',
    required: ['name'],

    properties: {
      name: { type: 'string', minLength: 1, maxLength: 32 },
    },
  };

  public name?: string;
}
