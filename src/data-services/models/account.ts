import { mixin, snakeCaseMappers, Model, JSONSchema } from 'objection';

import { BaseModel } from './base-model';
import { Organization } from './organization';

export class Account extends mixin(BaseModel) {
  public static override tableName = 'accounts';
  public static override columnNameMappers = snakeCaseMappers();

  public static override jsonSchema: JSONSchema = {
    type: 'object',
    required: ['organizationId', 'name'],

    properties: {
      name: { type: 'string', minLength: 1, maxLength: 32 },
    },
  };

  public static override relationMappings = {
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: Organization,
      join: {
        from: 'accounts.project_id',
        to: 'organizations.id',
      },
    },
  };
}
